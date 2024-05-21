import React, { useEffect, useState } from "react";
const features = [
  {
    feature: "Mails",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="28"
        width="28"
        fill="currentColor"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 24 24"
      >
        <path d="M24,9.5v10c0,2.48-2.02,4.5-4.5,4.5H4.5c-2.48,0-4.5-2.02-4.5-4.5V7.5C0,5.02,2.02,3,4.5,3H13.5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5H4.5c-1.61,0-2.97,1.09-3.38,2.57L9.52,14.97c1.36,1.37,3.58,1.36,4.95,0l4.67-4.82c.19-.2,.51-.2,.71-.01,.2,.19,.2,.51,.01,.71l-4.67,4.83c-.88,.88-2.04,1.32-3.19,1.32s-2.3-.44-3.18-1.32L1,7.86v11.64c0,1.93,1.57,3.5,3.5,3.5h15c1.93,0,3.5-1.57,3.5-3.5V9.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5Zm-8-5.5c0-2.21,1.79-4,4-4s4,1.79,4,4-1.79,4-4,4-4-1.79-4-4Zm1,0c0,1.65,1.35,3,3,3s3-1.35,3-3-1.35-3-3-3-3,1.35-3,3Z" />
      </svg>
    ),
    descriptions: [
      {
        line: "Instant Email Dispatch with a Single Click",
        highlight: false,
      },
      {
        line: "Optimize Your DNS Configuration to Prevent Emails from Landing in Spam Folders and Boost SEO Performance",
        highlight: false,
      },
      {
        line: "Email Forwarding Webhook: Seamlessly Receive and Redirect Emails",
        highlight: false,
      },
      {
        line: "Unlock 3 Extra Hours with Our Time-Saving Solution!",
        highlight: true,
      },
    ],
  },
  {
    feature: "Payments",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="28"
        height="28"
      >
        <path d="M19.5,22H4.5c-2.481,0-4.5-2.019-4.5-4.5V6.5C0,4.019,2.019,2,4.5,2h15c2.481,0,4.5,2.019,4.5,4.5v11c0,2.481-2.019,4.5-4.5,4.5ZM4.5,3c-1.93,0-3.5,1.57-3.5,3.5v11c0,1.93,1.57,3.5,3.5,3.5h15c1.93,0,3.5-1.57,3.5-3.5V6.5c0-1.93-1.57-3.5-3.5-3.5H4.5Zm14,10h-5c-.827,0-1.5-.673-1.5-1.5v-3c0-.827,.673-1.5,1.5-1.5h5c.827,0,1.5,.673,1.5,1.5v3c0,.827-.673,1.5-1.5,1.5Zm-5-5c-.276,0-.5,.224-.5,.5v3c0,.276,.224,.5,.5,.5h5c.276,0,.5-.224,.5-.5v-3c0-.276-.224-.5-.5-.5h-5Zm-3.5,4.5c0-.276-.224-.5-.5-.5H4.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h5c.276,0,.5-.224,.5-.5Zm10,4c0-.276-.224-.5-.5-.5H4.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h15c.276,0,.5-.224,.5-.5Z" />
      </svg>
    ),
    descriptions: [
      {
        line: "Payment Checkout Solutions",
        highlight: false,
      },
      {
        line: "Webhooks for Managing Payment Sessions",
        highlight: false,
      },
      {
        line: "Webhook to receive & forward emails",
        highlight: false,
      },
      {
        line: "Time saved: 3 hours",
        highlight: true,
      },
    ],
  },
  {
    feature: "Authentication",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        height="28"
        width="28"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="m12,7c-1.379,0-2.5,1.121-2.5,2.5,0,1.208.86,2.218,2,2.45v3.55c0,.276.224.5.5.5s.5-.224.5-.5v-3.55c1.14-.232,2-1.242,2-2.45,0-1.379-1.121-2.5-2.5-2.5Zm0,4c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5.673,1.5,1.5-.673,1.5-1.5,1.5Zm6.764-8.784L12.157.025c-.102-.033-.213-.033-.314,0l-6.606,2.19c-1.936.643-3.236,2.443-3.236,4.482v5.236c0,6.609,7.159,10.702,9.354,11.8,0,0,.319.266.649.266s.627-.214.627-.214c2.198-.884,9.37-4.351,9.37-11.852v-5.236c0-2.04-1.301-3.841-3.236-4.482Zm2.236,9.719c0,6.874-6.692,10.099-8.744,10.924l-.231.094-.224-.112c-2.064-1.032-8.801-4.869-8.801-10.905v-5.236c0-1.607,1.025-3.027,2.551-3.533l6.449-2.139,6.449,2.139c1.525.506,2.551,1.926,2.551,3.533v5.236Z" />
      </svg>
    ),
    descriptions: [
      {
        line: "Seamless Google, Github many more Account Login Integration",
        highlight: false,
      },
      {
        line: "User Data Management in MongoDB",
        highlight: false,
      },
      {
        line: "Enhanced Privacy Measures for Pages and API Access",
        highlight: false,
      },
      {
        line: "Efficiency Boost: Save 180 Minutes",
        highlight: true,
      },
    ],
  },
  {
    feature: "Database",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        height="28"
        width="28"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="m23,5.5v-1c0-1.93-1.57-3.5-3.5-3.5H4.5c-1.93,0-3.5,1.57-3.5,3.5v1c0,1.28.698,2.39,1.726,3-1.028.61-1.726,1.72-1.726,3v1c0,1.28.698,2.39,1.726,3-1.028.61-1.726,1.72-1.726,3v1c0,1.93,1.57,3.5,3.5,3.5h15c1.93,0,3.5-1.57,3.5-3.5v-1c0-1.28-.698-2.39-1.726-3,1.028-.61,1.726-1.72,1.726-3v-1c0-1.28-.698-2.39-1.726-3,1.028-.61,1.726-1.72,1.726-3Zm-1,13v1c0,1.379-1.121,2.5-2.5,2.5H4.5c-1.379,0-2.5-1.121-2.5-2.5v-1c0-1.379,1.121-2.5,2.5-2.5h.5v1.5c0,.276.224.5.5.5s.5-.224.5-.5v-1.5h3v1.5c0,.276.224.5.5.5s.5-.224.5-.5v-1.5h9.5c1.379,0,2.5,1.121,2.5,2.5Zm0-7v1c0,1.379-1.121,2.5-2.5,2.5H4.5c-1.379,0-2.5-1.121-2.5-2.5v-1c0-1.379,1.121-2.5,2.5-2.5h.5v1.5c0,.276.224.5.5.5s.5-.224.5-.5v-1.5h3v1.5c0,.276.224.5.5.5s.5-.224.5-.5v-1.5h9.5c1.379,0,2.5,1.121,2.5,2.5Zm-17.5-3.5c-1.379,0-2.5-1.121-2.5-2.5v-1c0-1.379,1.121-2.5,2.5-2.5h.5v1.5c0,.276.224.5.5.5s.5-.224.5-.5v-1.5h3v1.5c0,.276.224.5.5.5s.5-.224.5-.5v-1.5h9.5c1.379,0,2.5,1.121,2.5,2.5v1c0,1.379-1.121,2.5-2.5,2.5H4.5Z" />
      </svg>
    ),
    descriptions: [
      {
        line: "Flexible Data Storage Solutions",
        highlight: false,
      },
      {
        line: "Scalable User Management Systems with MongoDB and Mongoose",
        highlight: false,
      },
      {
        line: "Efficiency Boost: Save 2 Hours",
        highlight: true,
      },
    ],
  },
];
export default function ListFeatures(): React.ReactNode {
  const [active, setActive] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(
      () => setActive((a) => (a + 1) % features.length),
      10000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid gap-2 lg:grid-cols-4 sm:grid-cols-1 grid-cols-2 p-2 flex-wrap justify-center">
        {features.map((data, i) => (
          <div
            className={`flex flex-col ${
              active === i ? "text-secondary" : ""
            } items-center gap-2`}
            onClick={() => setActive(i)}
            key={`${i}_header`}
          >
            {data.icon}
            <h2>{data.feature}</h2>
          </div>
        ))}
      </div>
      <div className="flex card bg-base-300 max-w-7xl">
        {features.map((value, i) => (
          <div
            className={`${active !== i ? "hidden" : "flex"} p-8  flex-col`}
            key={i}
          >
            <ul>
              {value.descriptions.map((lines, each) => (
                <li
                  className={`mb-2 ${lines.highlight ? "text-primary" : "🤩"}`}
                  key={`${each}_point`}
                >
                  ✔ {lines.line}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
