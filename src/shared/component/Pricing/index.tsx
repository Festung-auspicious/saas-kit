import EmbeddedCheckoutButton from "@/app/billing/EmbeddedCheckoutButton";

const Pricing = (props: PaymentTemplate) => {
  return (
    <section className="bg-base-200 overflow-hidden" id="pricing">
      <div className="py-24 px-8 max-w-5xl mx-auto">
        <div className="flex flex-col text-center items-center w-full mb-20">
          <p className="font-medium kbd kbd-lg mb-8">Pricing</p>
          {props.paymentTemplate.title && (
            <h2 className="font-bold text-3xl lg:text-5xl tracking-tight">
              {props.paymentTemplate.title}
            </h2>
          )}
        </div>

        <div
          id="price"
          className="flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8"
        >
          {props.paymentTemplate.plans.map((plan, i) => (
            <div key={i} className=" w-full max-w-lg ">
              <div
                className={`p-8 ${
                  plan.featured && "border-primary border pt-0"
                } flex flex-col h-full gap-5 lg:gap-8 z-1 bg-base-100 rounded-lg`}
              >
                <div className="flex flex-col justify-between items-center">
                  {plan.featured && (
                    <div className="h-8 bg-primary px-10 rounded-b-md">
                      <span
                        className={
                          "text-xs text-primary-content font-semibold border-0 bg-primary"
                        }
                      >
                        Most Loved
                      </span>
                    </div>
                  )}
                  <div className="self-baseline">
                    <p className="text-lg lg:text-xl font-bold">{plan.name}</p>
                    {plan.description && (
                      <p className="text-base-content/80 mt-2">
                        {plan.description}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  {plan.priceAnchor && (
                    <div className="flex flex-col justify-end mb-[4px] text-lg ">
                      <p className="">
                        <span className="text-base-content/80 line-through">
                          ${plan.priceAnchor}
                        </span>
                      </p>
                    </div>
                  )}
                  <p className={`text-5xl tracking-tight font-extrabold`}>
                    ${plan.price}
                  </p>
                  <div className="flex flex-col justify-end mb-[4px]">
                    <p className="text-xs text-base-content/60 uppercase font-semibold">
                      USD
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <EmbeddedCheckoutButton priceId={plan.priceId} />

                  <p className="flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium">
                    Pay once. Access forever.
                  </p>
                  <div className="divider"></div>
                </div>
                {plan.features && (
                  <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        {feature.provided === undefined || feature.provided ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-[18px] h-[18px] shrink-0"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5 text-base-content/30 shrink-0"
                          >
                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
                          </svg>
                        )}
                        <span>{feature.name} </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
