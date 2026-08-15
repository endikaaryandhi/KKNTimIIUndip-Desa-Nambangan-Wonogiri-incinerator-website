import { useState, type ReactNode } from "react";
import "../styles/viewer.css";

interface ViewerFrameProps {
  title: string;
  icon: string;
  badge?: string;
  statusLeft?: string;
  statusRight?: string;
  children: ReactNode;
  bottomBar?: ReactNode;
  noPadding?: boolean;
}

export default function ViewerFrame({
  title,
  icon,
  badge,
  statusLeft,
  statusRight,
  children,
  bottomBar,
  noPadding = false,
}: ViewerFrameProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className={`viewer-frame ${isFullscreen ? "fullscreen" : ""}`}>
      {/* Toolbar */}
      <div className="viewer-toolbar">
        <div className="viewer-toolbar-left">
          <div className="viewer-toolbar-dots">
            <span className="viewer-toolbar-dot" />
            <span className="viewer-toolbar-dot" />
            <span className="viewer-toolbar-dot" />
          </div>
          <span className="viewer-toolbar-icon">{icon}</span>
          <span className="viewer-toolbar-title">{title}</span>
          {badge && <span className="viewer-toolbar-badge">{badge}</span>}
        </div>
        <div className="viewer-toolbar-right">
          <button
            className="viewer-toolbar-btn"
            onClick={() => setIsFullscreen(!isFullscreen)}
            title={isFullscreen ? "Tutup layar penuh" : "Layar penuh"}
          >
            {isFullscreen ? "✕" : "⛶"}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className={`viewer-content ${noPadding ? "no-padding" : ""}`}>{children}</div>

      {/* Bottom bar (nav for flipbook, etc) */}
      {bottomBar}

      {/* Status bar */}
      {(statusLeft || statusRight) && (
        <div className="viewer-statusbar">
          <span className="viewer-statusbar-left">{statusLeft}</span>
          <span className="viewer-statusbar-right">{statusRight}</span>
        </div>
      )}
    </div>
  );
}
