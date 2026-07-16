"use client"

export default function WhatsAppFloat() {
  return (
    <>
      <style>{`
        .wa-float {
          position: fixed;
          width: 60px;
          height: 60px;
          bottom: 40px;
          left: 40px;
          background-color: #25d366;
          color: #FFF;
          border-radius: 50px;
          text-align: center;
          font-size: 30px;
          box-shadow: 2px 2px 3px #999;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }
        .wa-bubble {
          bottom: 110px;
          left: 40px;
          position: fixed;
          background: #dbdbdb;
          color: #6e6e6e;
          font-family: Arial;
          font-size: 14px;
          line-height: 50px;
          box-shadow: 5px 5px 9px -3px #A3A3A3;
          text-align: center;
          width: 310px;
          height: 50px;
          border-radius: 10px;
          z-index: 100;
          white-space: nowrap;
        }
        .wa-bubble:after {
          content: '';
          position: absolute;
          display: block;
          width: 0;
          z-index: 1;
          border-style: solid;
          border-color: #dbdbdb transparent;
          border-width: 12px 10px 0;
          bottom: -12px;
          left: 24px;
        }
      `}</style>

      <div className="wa-bubble">Connect with The Pinnacle By STJ on WhatsApp</div>

      <a
        href="https://api.whatsapp.com/send/?phone=918344583445&text=I+would+like+Experience+The+Pinnacle+By+STJ&type=phone_number&app_absent=0"
        className="wa-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <img src="/images/header/whatsapp.png" alt="WhatsApp" width={36} height={36} />
      </a>
    </>
  );
}
