'use client';

const FONT = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export default function ContactTab() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: FONT,
      }}
    >
      <span
        style={{
          fontSize: '0.78rem',
          color: 'rgba(255,255,255,0.4)',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginBottom: '28px',
        }}
      >
        Contact
      </span>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '14px',
        }}
      >
        <a
          href="tel:15542196752"
          style={{
            fontSize: '1.1rem',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.88)',
            textDecoration: 'none',
            letterSpacing: '0.5px',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#00ffcc')}
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = 'rgba(255,255,255,0.88)')
          }
        >
          155 4219 6752
        </a>

        <a
          href="mailto:yinxiang9805@126.com"
          style={{
            fontSize: '1.1rem',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.88)',
            textDecoration: 'none',
            letterSpacing: '0.5px',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#00ffcc')}
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = 'rgba(255,255,255,0.88)')
          }
        >
          yinxiang9805@126.com
        </a>
      </div>
    </div>
  );
}
