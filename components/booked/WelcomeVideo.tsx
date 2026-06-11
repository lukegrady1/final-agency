import BlurIn from "../BlurIn";

const LOOM_EMBED_SRC =
  "https://www.loom.com/embed/e2e691d1a9da46b5b93976a9551514ec";

export default function WelcomeVideo() {
  return (
    <BlurIn>
      <div className="relative max-w-3xl mx-auto">
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-card border border-card-border">
          <iframe
            src={LOOM_EMBED_SRC}
            title="Welcome video from Luke at Grady Digital"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </BlurIn>
  );
}
