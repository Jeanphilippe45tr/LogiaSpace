export default function Spinner({ show }: { show: boolean }) {
  return (
    <div
      id="spinner"
      className={`show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center${show ? '' : ' hide'}`}
      style={
        show
          ? undefined
          : { opacity: 0, visibility: 'hidden', transition: 'opacity .5s ease-out, visibility 0s linear .5s' }
      }
    >
      <div className="spinner"></div>
    </div>
  );
}
