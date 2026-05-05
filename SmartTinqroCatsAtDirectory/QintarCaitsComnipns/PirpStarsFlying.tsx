import { WebView } from 'react-native-webview';
import { Dimensions, 
  View } from 'react-native';

const PirpStarsFlying = () => {
  const dimensions = Dimensions.get('window');

  const dsfuohugiusg = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        /* From Uiverse.io by andrew-manzyk */ 
        .loader {
          --fill-color: #5c3d99;
          --shine-color: #5c3d9933;
          transform: scale(0.5); /* You can change the size */
          width: 100px;
          height: auto;
          position: relative;
          filter: drop-shadow(0 0 10px var(--shine-color));
        }

        .loader #pegtopone {
          position: absolute;
          animation: flowe-one 1s linear infinite;
        }

        .loader #pegtoptwo {
          position: absolute;
          opacity: 0;
          transform: scale(0) translateY(-200px) translateX(-100px);
          animation: flowe-two 1s linear infinite;
          animation-delay: 0.3s;
        }

        .loader #pegtopthree {
          position: absolute;
          opacity: 0;
          transform: scale(0) translateY(-200px) translateX(100px);
          animation: flowe-three 1s linear infinite;
          animation-delay: 0.6s;
        }

        .loader svg g path:first-child {
          fill: var(--fill-color);
        }

        @keyframes flowe-one {
          0% {
            transform: scale(0.5) translateY(-200px);
            opacity: 0;
          }
          25% {
            transform: scale(0.75) translateY(-100px);
            opacity: 1;
          }
          50% {
            transform: scale(1) translateY(0px);
            opacity: 1;
          }
          75% {
            transform: scale(0.5) translateY(50px);
            opacity: 1;
          }
          100% {
            transform: scale(0) translateY(100px);
            opacity: 0;
          }
        }

        @keyframes flowe-two {
          0% {
            transform: scale(0.5) rotateZ(-10deg) translateY(-200px) translateX(-100px);
            opacity: 0;
          }
          25% {
            transform: scale(1) rotateZ(-5deg) translateY(-100px) translateX(-50px);
            opacity: 1;
          }
          50% {
            transform: scale(1) rotateZ(0deg) translateY(0px) translateX(-25px);
            opacity: 1;
          }
          75% {
            transform: scale(0.5) rotateZ(5deg) translateY(50px) translateX(0px);
            opacity: 1;
          }
          100% {
            transform: scale(0) rotateZ(10deg) translateY(100px) translateX(25px);
            opacity: 0;
          }
        }

        @keyframes flowe-three {
          0% {
            transform: scale(0.5) rotateZ(10deg) translateY(-200px) translateX(100px);
            opacity: 0;
          }
          25% {
            transform: scale(1) rotateZ(5deg) translateY(-100px) translateX(50px);
            opacity: 1;
          }
          50% {
            transform: scale(1) rotateZ(0deg) translateY(0px) translateX(25px);
            opacity: 1;
          }
          75% {
            transform: scale(0.5) rotateZ(-5deg) translateY(50px) translateX(0px);
            opacity: 1;
          }
          100% {
            transform: scale(0) rotateZ(-10deg) translateY(100px) translateX(-25px);
            opacity: 0;
          }
        }

        html, body {
          height: 100%;
          margin: 0;
          background: transparent;
        }
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          background: transparent;
        }
      </style>
    </head>
    <body>
      <!-- From Uiverse.io by andrew-manzyk --> 
      <div class="loader">
        <svg
          id="pegtopone"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 100 100"
        >
          <defs>
            <filter id="shine">
              <feGaussianBlur stdDeviation="3"></feGaussianBlur>
            </filter>
            <mask id="mask">
              <path
                d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                fill="white"
              ></path>
            </mask>
            <radialGradient
              id="gradient-1"
              cx="50"
              cy="66"
              fx="50"
              fy="66"
              r="30"
              gradientTransform="translate(0 35) scale(1 0.5)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stop-color="black" stop-opacity="0.3"></stop>
              <stop offset="50%" stop-color="black" stop-opacity="0.1"></stop>
              <stop offset="100%" stop-color="black" stop-opacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="gradient-2"
              cx="55"
              cy="20"
              fx="55"
              fy="20"
              r="30"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stop-color="white" stop-opacity="0.3"></stop>
              <stop offset="50%" stop-color="white" stop-opacity="0.1"></stop>
              <stop offset="100%" stop-color="white" stop-opacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="gradient-3"
              cx="85"
              cy="50"
              fx="85"
              fy="50"
              xlink:href="#gradient-2"
            ></radialGradient>
            <radialGradient
              id="gradient-4"
              cx="50"
              cy="58"
              fx="50"
              fy="58"
              r="60"
              gradientTransform="translate(0 47) scale(1 0.2)"
              xlink:href="#gradient-3"
            ></radialGradient>
            <linearGradient
              id="gradient-5"
              x1="50"
              y1="90"
              x2="50"
              y2="10"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stop-color="black" stop-opacity="0.2"></stop>
              <stop offset="40%" stop-color="black" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
          <g>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="currentColor"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-1)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="none"
              stroke="white"
              opacity="0.3"
              stroke-width="3"
              filter="url(#shine)"
              mask="url(#mask)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-2)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-3)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-4)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-5)"
            ></path>
          </g>
        </svg>
        <svg
          id="pegtoptwo"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 100 100"
        >
          <!-- ...same SVG defs and paths as above... -->
          <defs>
            <filter id="shine">
              <feGaussianBlur stdDeviation="3"></feGaussianBlur>
            </filter>
            <mask id="mask">
              <path
                d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                fill="white"
              ></path>
            </mask>
            <radialGradient
              id="gradient-1"
              cx="50"
              cy="66"
              fx="50"
              fy="66"
              r="30"
              gradientTransform="translate(0 35) scale(1 0.5)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stop-color="black" stop-opacity="0.3"></stop>
              <stop offset="50%" stop-color="black" stop-opacity="0.1"></stop>
              <stop offset="100%" stop-color="black" stop-opacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="gradient-2"
              cx="55"
              cy="20"
              fx="55"
              fy="20"
              r="30"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stop-color="white" stop-opacity="0.3"></stop>
              <stop offset="50%" stop-color="white" stop-opacity="0.1"></stop>
              <stop offset="100%" stop-color="white" stop-opacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="gradient-3"
              cx="85"
              cy="50"
              fx="85"
              fy="50"
              xlink:href="#gradient-2"
            ></radialGradient>
            <radialGradient
              id="gradient-4"
              cx="50"
              cy="58"
              fx="50"
              fy="58"
              r="60"
              gradientTransform="translate(0 47) scale(1 0.2)"
              xlink:href="#gradient-3"
            ></radialGradient>
            <linearGradient
              id="gradient-5"
              x1="50"
              y1="90"
              x2="50"
              y2="10"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stop-color="black" stop-opacity="0.2"></stop>
              <stop offset="40%" stop-color="black" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
          <g>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="currentColor"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-1)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="none"
              stroke="white"
              opacity="0.3"
              stroke-width="3"
              filter="url(#shine)"
              mask="url(#mask)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-2)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-3)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-4)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-5)"
            ></path>
          </g>
        </svg>
        <svg
          id="pegtopthree"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 100 100"
        >
          <!-- ...same SVG defs and paths as above... -->
          <defs>
            <filter id="shine">
              <feGaussianBlur stdDeviation="3"></feGaussianBlur>
            </filter>
            <mask id="mask">
              <path
                d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                fill="white"
              ></path>
            </mask>
            <radialGradient
              id="gradient-1"
              cx="50"
              cy="66"
              fx="50"
              fy="66"
              r="30"
              gradientTransform="translate(0 35) scale(1 0.5)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stop-color="black" stop-opacity="0.3"></stop>
              <stop offset="50%" stop-color="black" stop-opacity="0.1"></stop>
              <stop offset="100%" stop-color="black" stop-opacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="gradient-2"
              cx="55"
              cy="20"
              fx="55"
              fy="20"
              r="30"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stop-color="white" stop-opacity="0.3"></stop>
              <stop offset="50%" stop-color="white" stop-opacity="0.1"></stop>
              <stop offset="100%" stop-color="white" stop-opacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="gradient-3"
              cx="85"
              cy="50"
              fx="85"
              fy="50"
              xlink:href="#gradient-2"
            ></radialGradient>
            <radialGradient
              id="gradient-4"
              cx="50"
              cy="58"
              fx="50"
              fy="58"
              r="60"
              gradientTransform="translate(0 47) scale(1 0.2)"
              xlink:href="#gradient-3"
            ></radialGradient>
            <linearGradient
              id="gradient-5"
              x1="50"
              y1="90"
              x2="50"
              y2="10"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stop-color="black" stop-opacity="0.2"></stop>
              <stop offset="40%" stop-color="black" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
          <g>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="currentColor"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-1)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="none"
              stroke="white"
              opacity="0.3"
              stroke-width="3"
              filter="url(#shine)"
              mask="url(#mask)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-2)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-3)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-4)"
            ></path>
            <path
              d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
              fill="url(#gradient-5)"
            ></path>
          </g>
        </svg>
      </div>
    </body>
    </html>
  `;

  return (
    <View style={{
      height: dimensions.height * 0.1,
      flex: 0,
      alignSelf: 'center',
      width: dimensions.width * 0.9,
    }}>
      <WebView
        scrollEnabled={false}
        source={{ html: dsfuohugiusg }}
        showsVerticalScrollIndicator={false}
        startInLoadingState={false}
        scalesPageToFit={false}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        showsHorizontalScrollIndicator={false}
        mixedContentMode="compatibility"
        bounces={false}
        allowsInlineMediaPlayback={true}
        style={{ width: '100%', backgroundColor: 'transparent', height: '100%', }}
        mediaPlaybackRequiresUserAction={false}
      />
    </View>
  );
};

export default PirpStarsFlying;