const CardSVG = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 549 668"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        id="borderGradient"
        x1="20"
        y1="20"
        x2="520"
        y2="650"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="rgba(255,255,255,.25)" />
        <stop offset="45%" stopColor="rgba(255,255,255,.05)" />
        <stop offset="100%" stopColor="rgba(255,255,255,.18)" />
      </linearGradient>

      <linearGradient id="fillGradient" x1="0" y1="0" x2="550" y2="668">
        <stop offset="0%" stopColor="rgba(255,255,255,.08)" />
        <stop offset="45%" stopColor="rgba(255,255,255,.03)" />
        <stop offset="100%" stopColor="rgba(15,25,15,.35)" />
      </linearGradient>

      <filter id="shadow" x="-15%" y="-15%" width="130%" height="130%">
        <feDropShadow dx="0" dy="18" stdDeviation="18" floodOpacity=".28" />
      </filter>
    </defs>

    <path
      filter="url(#shadow)"
      d="M18.4 88.1761C18.4 40.121 61.9673 3.62089 109.575 10.1592C160.849 17.2009 224.399 24.202 274.4 24.202C324.401 24.202 387.952 17.2009 439.225 10.1592C486.833 3.62089 530.4 40.1211 530.4 88.1761V562.87C530.4 605.396 495.926 639.87 453.4 639.87H95.4C52.8741 639.87 18.4 605.396 18.4 562.87V88.1761Z"
      fill="url(#fillGradient)"
    />

    <path
      d="M18.4 88.1761C18.4 40.121 61.9673 3.62089 109.575 10.1592C160.849 17.2009 224.399 24.202 274.4 24.202C324.401 24.202 387.952 17.2009 439.225 10.1592C486.833 3.62089 530.4 40.1211 530.4 88.1761V562.87C530.4 605.396 495.926 639.87 453.4 639.87H95.4C52.8741 639.87 18.4 605.396 18.4 562.87V88.1761Z"
      stroke="url(#borderGradient)"
      strokeWidth="2"
    />
  </svg>
);

export default CardSVG;
