/**
 * GOOGLE APPS SCRIPT FOR KHUSHAN BORSE'S PORTFOLIO
 * 
 * Target Google Spreadsheet:
 * https://docs.google.com/spreadsheets/d/1cmL6W37NnF1EtxKoLYrZ43SPAQOgcT7K0TC1lCU9LWQ/edit?usp=sharing
 * 
 * SETUP INSTRUCTIONS (Takes ~1 minute):
 * 1. Open your Google Sheet in your browser:
 *    https://docs.google.com/spreadsheets/d/1cmL6W37NnF1EtxKoLYrZ43SPAQOgcT7K0TC1lCU9LWQ/edit
 * 2. In the top navigation bar, click: Extensions → Apps Script.
 * 3. Delete any default code in Code.gs and paste the entirety of this file into the editor.
 * 4. Click the "Save project" icon (Floppy disk).
 * 5. In the top right, click "Deploy" → "New deployment".
 * 6. Under "Select type" (gear icon), choose "Web app".
 * 7. Set:
 *    - Description: Portfolio Logger
 *    - Execute as: Me (your Google account)
 *    - Who has access: Anyone
 * 8. Click "Deploy". When prompted, click "Authorize access", choose your Google account, click "Advanced" → "Go to Untitled project (unsafe)", and click "Allow".
 * 9. Copy the generated Web App URL (starts with https://script.google.com/macros/s/.../exec).
 * 10. Add it to your .env.local file:
 *     GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
 *     And add it to your Vercel Project Settings → Environment Variables.
 */

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (pErr) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var timestamp = new Date();

    // 1. Log Contact Form Submissions
    if (data.type === 'contact') {
      var sheet = ss.getSheetByName('Contact Messages');
      if (!sheet) {
        sheet = ss.insertSheet('Contact Messages');
        sheet.appendRow(['Timestamp', 'Name', 'Email', 'Message', 'IP Address']);
        sheet.getRange(1, 1, 1, 5)
          .setFontWeight('bold')
          .setBackground('#0071e3')
          .setFontColor('#ffffff');
        sheet.setFrozenRows(1);
      }
      sheet.appendRow([
        timestamp,
        data.name || '',
        data.email || '',
        data.message || '',
        data.ip || ''
      ]);
      return ContentService.createTextOutput(JSON.stringify({ status: 'success', type: 'contact' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // 2. Log KAI Chatbot Questions & Answers
    if (data.type === 'kai') {
      var sheet = ss.getSheetByName('KAI Conversations');
      if (!sheet) {
        sheet = ss.insertSheet('KAI Conversations');
        sheet.appendRow(['Timestamp', 'Question', 'Answer', 'Visitor IP']);
        sheet.getRange(1, 1, 1, 4)
          .setFontWeight('bold')
          .setBackground('#1d1d1f')
          .setFontColor('#ffffff');
        sheet.setFrozenRows(1);
      }
      sheet.appendRow([
        timestamp,
        data.question || '',
        data.answer || '',
        data.ip || ''
      ]);
      return ContentService.createTextOutput(JSON.stringify({ status: 'success', type: 'kai' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    return ContentService.createTextOutput(JSON.stringify({ status: 'ignored', reason: 'unknown type' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'active',
    message: "Khushan's Portfolio Google Sheet Logger is active."
  })).setMimeType(ContentService.MimeType.JSON);
}
