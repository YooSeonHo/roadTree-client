import Image from "next/image";

interface Props {
  className?: string;
  onClick?: () => void;
  color?: string;
}

export const Logo = (props: Props) => {
  return (
    <div className={props.className} onClick={props.onClick}>
      <Image
        src={"/logo.svg"}
        alt={"logo"}
        width={128}
        height={52}
        style={{ width: 128, height: 52 }}
        priority
        className="hidden sm:flex"
      />
      <Image
        src={"/header/RoadTreeIcon.svg"}
        alt={"logo"}
        width={64}
        height={64}
        priority
        className="flex sm:hidden"
      />
    </div>
  );
};

export const ListBulletIcon = (props: Props) => {
  return (
    <div className={props.className}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 8C10 7.73478 10.1054 7.48043 10.2929 7.29289C10.4804 7.10536 10.7348 7 11 7H27C27.2652 7 27.5196 7.10536 27.7071 7.29289C27.8946 7.48043 28 7.73478 28 8C28 8.26522 27.8946 8.51957 27.7071 8.70711C27.5196 8.89464 27.2652 9 27 9H11C10.7348 9 10.4804 8.89464 10.2929 8.70711C10.1054 8.51957 10 8.26522 10 8ZM27 15H11C10.7348 15 10.4804 15.1054 10.2929 15.2929C10.1054 15.4804 10 15.7348 10 16C10 16.2652 10.1054 16.5196 10.2929 16.7071C10.4804 16.8946 10.7348 17 11 17H27C27.2652 17 27.5196 16.8946 27.7071 16.7071C27.8946 16.5196 28 16.2652 28 16C28 15.7348 27.8946 15.4804 27.7071 15.2929C27.5196 15.1054 27.2652 15 27 15ZM27 23H11C10.7348 23 10.4804 23.1054 10.2929 23.2929C10.1054 23.4804 10 23.7348 10 24C10 24.2652 10.1054 24.5196 10.2929 24.7071C10.4804 24.8946 10.7348 25 11 25H27C27.2652 25 27.5196 24.8946 27.7071 24.7071C27.8946 24.5196 28 24.2652 28 24C28 23.7348 27.8946 23.4804 27.7071 23.2929C27.5196 23.1054 27.2652 23 27 23ZM5.5 14.5C5.20333 14.5 4.91332 14.588 4.66665 14.7528C4.41997 14.9176 4.22771 15.1519 4.11418 15.426C4.00065 15.7001 3.97094 16.0017 4.02882 16.2926C4.0867 16.5836 4.22956 16.8509 4.43934 17.0607C4.64912 17.2704 4.91639 17.4133 5.20737 17.4712C5.49834 17.5291 5.79994 17.4993 6.07403 17.3858C6.34811 17.2723 6.58238 17.08 6.74721 16.8334C6.91203 16.5867 7 16.2967 7 16C7 15.6022 6.84197 15.2206 6.56066 14.9393C6.27936 14.658 5.89783 14.5 5.5 14.5ZM5.5 6.5C5.20333 6.5 4.91332 6.58797 4.66665 6.7528C4.41997 6.91762 4.22771 7.15189 4.11418 7.42597C4.00065 7.70006 3.97094 8.00166 4.02882 8.29264C4.0867 8.58361 4.22956 8.85088 4.43934 9.06066C4.64912 9.27044 4.91639 9.4133 5.20737 9.47118C5.49834 9.52906 5.79994 9.49935 6.07403 9.38582C6.34811 9.27229 6.58238 9.08003 6.74721 8.83335C6.91203 8.58668 7 8.29667 7 8C7 7.60218 6.84197 7.22064 6.56066 6.93934C6.27936 6.65804 5.89783 6.5 5.5 6.5ZM5.5 22.5C5.20333 22.5 4.91332 22.588 4.66665 22.7528C4.41997 22.9176 4.22771 23.1519 4.11418 23.426C4.00065 23.7001 3.97094 24.0017 4.02882 24.2926C4.0867 24.5836 4.22956 24.8509 4.43934 25.0607C4.64912 25.2704 4.91639 25.4133 5.20737 25.4712C5.49834 25.5291 5.79994 25.4993 6.07403 25.3858C6.34811 25.2723 6.58238 25.08 6.74721 24.8334C6.91203 24.5867 7 24.2967 7 24C7 23.6022 6.84197 23.2206 6.56066 22.9393C6.27936 22.658 5.89783 22.5 5.5 22.5Z"
          fill="inherit"
        />
      </svg>
    </div>
  );
};

export const BookIcon = (props: Props) => {
  return (
    <div className={props.className}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28 7H20C18.9391 7 17.9217 7.42139 17.1716 8.17163C16.4214 8.92163 16 9.93921 16 11C16 9.93921 15.5786 8.92163 14.8284 8.17163C14.0783 7.42139 13.0609 7 12 7H4C3.7348 7 3.48041 7.10547 3.29291 7.29297C3.10535 7.48047 3 7.73486 3 8V24C3 24.2651 3.10535 24.5195 3.29291 24.707C3.48041 24.8945 3.7348 25 4 25H12C13.0609 25 14.0783 25.4214 14.8284 26.1716C15.5786 26.9216 16 27.9392 16 29C16 27.9392 16.4214 26.9216 17.1716 26.1716C17.9217 25.4214 18.9391 25 20 25H28C28.2652 25 28.5196 24.8945 28.7071 24.707C28.8947 24.5195 29 24.2651 29 24V8C29 7.73486 28.8947 7.48047 28.7071 7.29297C28.5196 7.10547 28.2652 7 28 7Z"
          fill="white"
          fillOpacity="0.1"
        />
        <path
          d="M16.4645 25.4645C15 26.9289 15 29 15 29C15 29.5523 15.4477 30 16 30C16.5523 30 17 29.5523 17 29C17 27.7574 17.8787 26.8787 17.8787 26.8787C18.7574 26 20 26 20 26H28C28.8284 26 29.4142 25.4142 29.4142 25.4142C30 24.8284 30 24 30 24V8C30 7.17157 29.4142 6.58579 29.4142 6.58579C28.8284 6 28 6 28 6H20C17.9289 6 16.4645 7.46447 16.4645 7.46447C15 8.92893 15 11 15 11C15 11.5523 15.4477 12 16 12C16.2652 12 16.5196 11.8946 16.7071 11.7071C16.8946 11.5196 17 11.2652 17 11C17 9.75736 17.8787 8.87868 17.8787 8.87868C18.7574 8 20 8 20 8H28V24H20C17.9289 24 16.4645 25.4645 16.4645 25.4645Z"
          fill="inherit"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 8C2 8 2 7.17157 2.58579 6.58579C2.58579 6.58579 3.17157 6 4 6H12C12 6 14.0711 6 15.5355 7.46447C15.5355 7.46447 17 8.92893 17 11V29C17 29.5523 16.5523 30 16 30C15.4477 30 15 29.5523 15 29C15 29 15 27.7574 14.1213 26.8787C14.1213 26.8787 13.2426 26 12 26H4C4 26 3.17157 26 2.58579 25.4142C2.58579 25.4142 2 24.8284 2 24V8ZM15 11V24.9934C15 24.9934 13.7057 24 12 24H4V8H12C12 8 13.2426 8 14.1213 8.87868C14.1213 8.87868 15 9.75736 15 11Z"
          fill="inherit"
        />
      </svg>
    </div>
  );
};

export const ChatIcon = (props: Props) => {
  return (
    <div className={props.className}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21 19H9.30354L4.62852 22.7778C4.19896 23.1249 3.56933 23.0581 3.22221 22.6285C3.07843 22.4506 3 22.2288 3 22V6C3 6 3 5.17157 3.58579 4.58579C3.58579 4.58579 4.17157 4 5 4H21C21 4 21.8284 4 22.4142 4.58579C22.4142 4.58579 23 5.17157 23 6V17C23 17 23 17.8284 22.4142 18.4142C22.4142 18.4142 21.8284 19 21 19ZM21 17V6H5V19.9062L8.32148 17.2222C8.4994 17.0784 8.72124 17 8.95 17H21Z"
          fill="inherit"
        />
        <path
          d="M27 10H22C21.4477 10 21 10.4477 21 11C21 11.5523 21.4477 12 22 12H27V25.9062L23.6785 23.2222C23.5006 23.0784 23.2788 23 23.05 23H11V18C11 17.4477 10.5523 17 10 17C9.44772 17 9 17.4477 9 18V23C9 23.8284 9.58579 24.4142 9.58579 24.4142C10.1716 25 11 25 11 25H22.6965L27.3715 28.7778C27.5494 28.9216 27.7712 29 28 29C28.5523 29 29 28.5523 29 28V12C29 11.1716 28.4142 10.5858 28.4142 10.5858C27.8284 10 27 10 27 10Z"
          fill="inherit"
        />
      </svg>
    </div>
  );
};

export const ClipIcon = (props: Props) => {
  return (
    <div className={props.className}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.2125 15.2874C26.3986 15.4787 26.5017 15.7357 26.4994 16.0025C26.497 16.2694 26.3894 16.5245 26.2 16.7124L15.95 26.9499C14.6372 28.2628 12.8566 29.0003 11 29.0003C9.14338 29.0003 7.36281 28.2628 6.04999 26.9499C4.73717 25.6371 3.99963 23.8566 3.99963 21.9999C3.99963 20.1433 4.73717 18.3628 6.04999 17.0499L18.4625 4.47494C18.9217 3.99071 19.4733 3.60332 20.0846 3.33559C20.6959 3.06787 21.3547 2.92525 22.022 2.91612C22.6893 2.90699 23.3517 3.03154 23.9701 3.28244C24.5885 3.53334 25.1505 3.9055 25.6228 4.37699C26.0951 4.84848 26.4683 5.40975 26.7203 6.02773C26.9722 6.6457 27.098 7.30787 27.09 7.9752C27.0821 8.64253 26.9406 9.30152 26.674 9.91331C26.4073 10.5251 26.0209 11.0773 25.5375 11.5374L13.125 24.1124C12.8475 24.3942 12.5167 24.6178 12.1518 24.7701C11.787 24.9225 11.3954 25.0007 11 24.9999C10.4056 25.0014 9.82412 24.8263 9.32942 24.4967C8.83472 24.1672 8.44906 23.6981 8.22139 23.149C7.99372 22.5999 7.9343 21.9956 8.05067 21.4126C8.16703 20.8297 8.45394 20.2945 8.87499 19.8749L19.2875 9.29994C19.3776 9.19888 19.4873 9.11716 19.6099 9.05975C19.7325 9.00234 19.8655 8.97043 20.0009 8.96595C20.1362 8.96148 20.271 8.98453 20.3972 9.03371C20.5233 9.08289 20.6382 9.15718 20.7347 9.25207C20.8313 9.34696 20.9076 9.46048 20.959 9.58574C21.0104 9.711 21.0359 9.84539 21.0338 9.98077C21.0317 10.1162 21.0022 10.2497 20.9469 10.3733C20.8917 10.4969 20.8119 10.6081 20.7125 10.6999L10.3 21.2874C10.2052 21.3804 10.1299 21.4912 10.0784 21.6135C10.0268 21.7359 10.0002 21.8672 9.99999 21.9999C10.0037 22.1967 10.0646 22.3881 10.1753 22.5507C10.286 22.7134 10.4417 22.8403 10.6234 22.9159C10.805 22.9915 11.0048 23.0125 11.1982 22.9764C11.3917 22.9402 11.5704 22.8485 11.7125 22.7124L24.1125 10.1249C24.3942 9.84749 24.6178 9.51666 24.7702 9.1518C24.9226 8.78693 25.0007 8.39535 25 7.99994C25.0015 7.40553 24.8263 6.82408 24.4968 6.32937C24.1672 5.83467 23.6981 5.44901 23.149 5.22134C22.6 4.99367 21.9956 4.93425 21.4127 5.05062C20.8298 5.16698 20.2946 5.4539 19.875 5.87494L7.47499 18.4624C6.99076 18.9217 6.60336 19.4732 6.33564 20.0846C6.06792 20.6959 5.92529 21.3546 5.91617 22.0219C5.90704 22.6892 6.03159 23.3516 6.28249 23.9701C6.53339 24.5885 6.90555 25.1504 7.37704 25.6227C7.84853 26.0951 8.4098 26.4682 9.02778 26.7202C9.64575 26.9722 10.3079 27.0979 10.9752 27.09C11.6426 27.082 12.3016 26.9406 12.9134 26.6739C13.5252 26.4073 14.0774 26.0209 14.5375 25.5374L24.7875 15.2874C24.9771 15.0997 25.2331 14.9943 25.5 14.9943C25.7668 14.9943 26.0229 15.0997 26.2125 15.2874Z"
          fill="inherit"
        />
      </svg>
    </div>
  );
};

export const CheckIcon = (props: Props) => {
  return (
    <div className={props.className}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.77296 8.60246L3.77275 8.60225C3.66726 8.49676 3.52418 8.4375 3.375 8.4375C3.22582 8.4375 3.08274 8.49676 2.97725 8.60225C2.87176 8.70774 2.8125 8.85082 2.8125 9C2.8125 9.00901 2.81272 9.01802 2.81315 9.02702C2.81987 9.1667 2.87837 9.29887 2.97725 9.39775L2.97746 9.39796L6.91475 13.3352C7.13442 13.5549 7.49058 13.5549 7.71025 13.3352L15.5852 5.46025C15.6907 5.35476 15.75 5.21168 15.75 5.0625C15.75 4.91332 15.6907 4.77024 15.5852 4.66475C15.4798 4.55926 15.3367 4.5 15.1875 4.5C15.0383 4.5 14.8952 4.55926 14.7898 4.66475L7.3125 12.142L3.77296 8.60246Z"
          fill="inherit"
        />
      </svg>
    </div>
  );
};

export const StarIcon = (props: Props) => {
  return (
    <div className={props.className}>
      <svg
        width="28"
        height="28"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 21 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="m11.479 1.712 2.367 4.8a.532.532 0 0 0 .4.292l5.294.769a.534.534 0 0 1 .3.91l-3.83 3.735a.534.534 0 0 0-.154.473l.9 5.272a.535.535 0 0 1-.775.563l-4.734-2.49a.536.536 0 0 0-.5 0l-4.73 2.487a.534.534 0 0 1-.775-.563l.9-5.272a.534.534 0 0 0-.154-.473L2.158 8.48a.534.534 0 0 1 .3-.911l5.294-.77a.532.532 0 0 0 .4-.292l2.367-4.8a.534.534 0 0 1 .96.004Z"
        />
      </svg>
    </div>
  );
};
