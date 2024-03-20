export default function BackgroundVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      className="fixed left-0 top-0 h-full w-full object-cover "
      style={{ zIndex: -1 }}
    >
      <source src="/BackgroundVideo.mp4" type="video/mp4" />
    </video>
  );
}
