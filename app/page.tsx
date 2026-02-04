import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YT Short Clipper',
  description: 'Turn long YouTube videos into viral shorts — Powered by AI',
};

export default function Home() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>YT Short Clipper</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #0B1B24 0%, #1a3a48 100%);
            color: #e0e6ed;
            min-height: 100vh;
            padding: 20px;
          }

          .shell {
            max-width: 1200px;
            margin: 0 auto;
          }

          header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            background: rgba(18, 43, 56, 0.6);
            backdrop-filter: blur(10px);
            border-radius: 12px;
            border: 1px solid rgba(18, 191, 228, 0.2);
            margin-bottom: 30px;
          }

          .brand {
            display: flex;
            align-items: center;
            gap: 15px;
          }

          .brand-icon {
            width: 40px;
            height: 40px;
            border-radius: 8px;
          }

          .brand-title {
            font-size: 20px;
            font-weight: 700;
            color: #fff;
          }

          .brand-sub {
            font-size: 12px;
            color: #8ba5b8;
          }

          .nav {
            display: flex;
            gap: 10px;
          }

          .nav-btn {
            padding: 8px 16px;
            background: rgba(18, 191, 228, 0.1);
            border: 1px solid rgba(18, 191, 228, 0.3);
            border-radius: 6px;
            color: #12bfe4;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.2s;
          }

          .nav-btn:hover {
            background: rgba(18, 191, 228, 0.2);
            border-color: rgba(18, 191, 228, 0.5);
          }

          .nav-btn.active {
            background: rgba(18, 191, 228, 0.3);
            border-color: rgba(18, 191, 228, 0.8);
          }

          main {
            display: grid;
            gap: 20px;
          }

          .view {
            display: none;
          }

          .view.active {
            display: block;
            animation: fadeIn 0.3s ease;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .card {
            background: rgba(18, 43, 56, 0.8);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(18, 191, 228, 0.2);
            border-radius: 12px;
            padding: 25px;
          }

          .section-title {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 20px;
            color: #fff;
          }

          .label {
            font-size: 13px;
            font-weight: 600;
            color: #a8b8c8;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 12px;
          }

          .provider-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 10px;
            margin-bottom: 25px;
          }

          .provider-card {
            padding: 12px;
            background: rgba(18, 191, 228, 0.05);
            border: 2px solid rgba(18, 191, 228, 0.3);
            border-radius: 8px;
            color: #12bfe4;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.2s;
            font-size: 13px;
          }

          .provider-card:hover {
            background: rgba(18, 191, 228, 0.1);
            border-color: rgba(18, 191, 228, 0.6);
          }

          .provider-card.active {
            background: rgba(18, 191, 228, 0.25);
            border-color: #12bfe4;
            box-shadow: 0 0 12px rgba(18, 191, 228, 0.3);
          }

          .ai-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-bottom: 20px;
          }

          .ai-card {
            background: rgba(11, 27, 36, 0.6);
            border: 1px solid rgba(18, 191, 228, 0.15);
            border-radius: 10px;
            padding: 18px;
          }

          .ai-title {
            font-size: 14px;
            font-weight: 700;
            color: #fff;
            margin-bottom: 15px;
          }

          .field {
            display: flex;
            flex-direction: column;
            gap: 6px;
            margin-bottom: 12px;
          }

          .input,
          .select {
            padding: 10px 12px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(18, 191, 228, 0.2);
            border-radius: 6px;
            color: #e0e6ed;
            font-size: 13px;
            font-family: 'Inter', sans-serif;
            transition: border-color 0.2s;
          }

          .input:focus,
          .select:focus {
            outline: none;
            border-color: #12bfe4;
            box-shadow: 0 0 8px rgba(18, 191, 228, 0.2);
          }

          .input::placeholder {
            color: #5a7086;
          }

          .input-group {
            display: flex;
            gap: 8px;
          }

          .input-group .input {
            flex: 1;
          }

          .icon-btn {
            padding: 8px 12px;
            background: rgba(18, 191, 228, 0.1);
            border: 1px solid rgba(18, 191, 228, 0.3);
            border-radius: 6px;
            color: #12bfe4;
            cursor: pointer;
            font-size: 16px;
            transition: all 0.2s;
          }

          .icon-btn:hover {
            background: rgba(18, 191, 228, 0.2);
            border-color: rgba(18, 191, 228, 0.5);
          }

          .validate-row {
            display: flex;
            gap: 10px;
            align-items: center;
            margin-top: 10px;
          }

          .btn {
            padding: 10px 20px;
            border-radius: 6px;
            font-weight: 600;
            font-size: 13px;
            cursor: pointer;
            border: none;
            transition: all 0.2s;
            font-family: 'Inter', sans-serif;
          }

          .btn.primary {
            background: linear-gradient(135deg, #12bfe4 0%, #0a9bb8 100%);
            color: #fff;
          }

          .btn.primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 16px rgba(18, 191, 228, 0.3);
          }

          .btn.primary:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none;
          }

          .btn.ghost {
            background: rgba(18, 191, 228, 0.1);
            border: 1px solid rgba(18, 191, 228, 0.3);
            color: #12bfe4;
          }

          .btn.ghost:hover {
            background: rgba(18, 191, 228, 0.2);
            border-color: rgba(18, 191, 228, 0.5);
          }

          .status {
            padding: 12px;
            background: rgba(18, 191, 228, 0.1);
            border-left: 3px solid #12bfe4;
            border-radius: 4px;
            font-size: 13px;
            color: #12bfe4;
            margin-top: 15px;
            display: none;
          }

          .status:not(:empty) {
            display: block;
          }

          .status-inline {
            font-size: 12px;
            color: #8ba5b8;
            padding: 0 8px;
          }

          .input-row {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
          }

          .input-row .input {
            flex: 1;
          }

          .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-bottom: 20px;
          }

          .switch {
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
          }

          .switch input {
            appearance: none;
            width: 40px;
            height: 22px;
            background: rgba(18, 191, 228, 0.2);
            border-radius: 11px;
            cursor: pointer;
            position: relative;
            border: none;
            transition: background 0.2s;
          }

          .switch input:checked {
            background: #12bfe4;
          }

          .switch input::before {
            content: '';
            position: absolute;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: #fff;
            top: 2px;
            left: 2px;
            transition: left 0.2s;
          }

          .switch input:checked::before {
            left: 20px;
          }

          .switch-label {
            color: #e0e6ed;
            font-size: 13px;
            font-weight: 500;
          }

          .progress {
            width: 100%;
            height: 6px;
            background: rgba(18, 191, 228, 0.1);
            border-radius: 3px;
            overflow: hidden;
            margin: 15px 0;
          }

          .bar {
            height: 100%;
            background: linear-gradient(90deg, #12bfe4 0%, #0a9bb8 100%);
            width: 0%;
            transition: width 0.3s ease;
          }

          .ai-actions {
            display: flex;
            gap: 10px;
            margin-top: 20px;
          }

          .hidden {
            display: none !important;
          }

          .help-text {
            font-size: 12px;
            color: #8ba5b8;
            margin-top: 8px;
            padding: 8px;
            background: rgba(18, 191, 228, 0.08);
            border-radius: 4px;
          }

          .help-text a {
            color: #12bfe4;
            text-decoration: none;
            font-weight: 600;
          }

          .help-text a:hover {
            text-decoration: underline;
          }

          @media (max-width: 768px) {
            header {
              flex-direction: column;
              text-align: center;
              gap: 15px;
            }

            .nav {
              width: 100%;
              justify-content: center;
            }

            .ai-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </head>
      <body>
        <div id="app"></div>
        <script src="/components/header.js" defer></script>
        <script src="/components/api-settings.js" defer></script>
        <script src="/components/ai-settings.js" defer></script>
        <script src="/components/home.js" defer></script>
        <script src="/app.js" defer></script>
      </body>
    </html>
  );
}
