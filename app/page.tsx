'use client';

import FlyingChatbot from '@/components/FlyingChatbot';
import FlyingVideoCraft from '@/components/FlyingVideoCraft';
import Navbar from '@/components/Navbar';
import HalftoneReveal from '@/components/HalftoneReveal';
import portraitImage from '@/assets/image.png';

export default function Page() {
  return (
    <main className="home-page">
      <Navbar />
      <section className="home-intro" aria-labelledby="home-title">
        <h1 id="home-title">Hello, I’m Khushan.</h1>
        <p className="home-summary">
          I study intelligent systems and build practical machine learning projects. Ask KAI about my work.
        </p>
      </section>
      {/* PC Left-Side Telemetry Video Crafts (Exact WebGL Smoke Engine, Skipped on Mobile) */}
      <section className="home-video-drone home-video-drone--1" aria-hidden="true">
        <FlyingVideoCraft
          videoSrc="/videos/robotics-demo-1.mp4"
          title="AR4 // TELEOP 01"
          homeRatio={0.09}
          altitude={370}
          width={205}
          height={275}
          thrustColor="#0071e3"
          smokeColor="#014cc8"
          smoke={1.2}
          turbulence={0.8}
        />
      </section>

      <section className="home-video-drone home-video-drone--2" aria-hidden="true">
        <FlyingVideoCraft
          videoSrc="/videos/robotics-demo-2.mp4"
          title="AR4 // ACTUATE 02"
          homeRatio={0.16}
          altitude={180}
          width={205}
          height={275}
          thrustColor="#0071e3"
          smokeColor="#014cc8"
          smoke={1.2}
          turbulence={0.8}
        />
      </section>

      <aside className="home-portrait" role="img" aria-label="Portrait of Khushan">
        <HalftoneReveal
          src={portraitImage.src}
          fit="contain"
          align="bottom-right"
          mode="mono"
          shape="dot"
          cellSize={6}
          inkColor="#294567"
          paperColor="#ffffff"
          revealRadius={120}
          softness={0.7}
          linger={1.5}
          intro={true}
          className="home-portrait-print"
        />
      </aside>
      <section className="home-chat-stage" aria-label="Chat with KAI personal assistant">
        <FlyingChatbot
          name="KAI personal assistant"
          theme="white"
          jets={2}
          altitude={140}
          mobileAltitude={280}
          width={640}
          autoLaunch={true}
          continuousFlight={true}
          thrustColor="#0071e3"
          smokeColor="#014cc8"
          smoke={1.2}
          turbulence={0.8}
          className="home-chatbot"
        />
      </section>
    </main>
  );
}
