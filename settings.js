
const config =
{
    paymentTemplate: {
        title: "Let's grow to together",
        plans: [
            {
                priceId: "REPLACE_PRICE_ID_HERE",
                name: "Starter",
                description: "Perfect for small projects",
                price: 79,
                priceAnchor: 99,
                features: [
                    {
                        name: "Shiply boilerplate",
                    },
                    { name: "User auth" },
                    { name: "Database" },
                    { name: "Emails" },
                    { name: "24/7 support", provided:false },

                ],
            },
            {
                featured: true,
                priceId: "REPLACE_PRICE_ID_HERE",
                name: "Advanced",
                description: "You need more power",
                price: 99,
                priceAnchor: 149,
                features: [
                    {
                        name: "Shiply boilerplate",
                        provided:true  // given a true show tick for the feature, indicating that it is part of this package.
                    },
                    { name: "User oauth" },
                    { name: "Database" },
                    { name: "Emails" },
                    { name: "1 year of updates" },
                    { name: "24/7 support" },
                ],
            },
        ],
    },
    appInfo:{
        name:"Shiply",
        //Set sendGridLogin false if you want credentials login
        sendGridLogin: true,
        domain: "https://shiply.store",
        description: "Get started quickly on building your SaaS, AI tool or any other web app with our comprehensive NextJS starter kit,designed to help you start earning online revenue in no time",
        supportEmail:"dhumalshubham436@gmail.com"
    },
    email:{
        admin: "dhumalshubham436@gmail.com",
        replyto: "dhumalshubham436@gmail.com"
    }
}

export default config;