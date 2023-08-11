import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import Link from "next/link";

const pricingTiers = [
  {
    name: "Free",
    price: "$15",
    features: [
      "Collaborate on up to 3 projects",
      "Access to shared feedback",
      "Limited project analytics",
      "Community support",
    ],
    color: {
      default: "bg-blue-800",
      hover: "bg-blue-800/80",
    },
    cta: {
      text: "Try for free",
      href: "/signup?tier=free",
    },
  },
  {
    name: "Starter",
    price: "$15",
    features: [
      "Collaborate on up to 3 projects",
      "Access to shared feedback",
      "Limited project analytics",
      "Community support",
    ],
    color: {
      default: "bg-blue-800",
      hover: "bg-blur-800/80",
    },
    cta: {
      text: "Get Plan",
      href: "/signup",
    },
  },
  {
    name: "Pro",
    price: "$25",
    features: [
      "Collaborate on unlimited projects",
      "Access to shared feedback",
      "Advanced project analytics",
      "Priority customer support",
    ],
    color: {
      default: "bg-green-800",
      hover: "bg-green-800/80",
    },
    cta: {
      text: "Get Plan",
      href: "/upgrade",
    },
  },
  {
    name: "Top!",
    price: "$50",
    features: [
      "Customizable collaboration",
      "Advanced project analytics",
      "Dedicated account manager",
      "24/7 premium support",
      "Public badge",
    ],
    color: {
      default: "bg-indigo-800",
      hover: "bg-indigo-800/80",
    },
    cta: {
      text: "Get Plan",
      href: "/contact",
    },
  },
];

const Pricing = () => {
  return (
    <div className="bg-zinc-900  text-white">
      <div className="container min-h-screen px-12 lg:px-24 py-6 lg:py-12 flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:4xl lg:text-5xl font-bold text-center ">
            Study pricing
          </h1>
          <div className="flex flex-col gap-0.5">
            <p className="text-xl text-center text-gray-300">
              Invite anyone to collaborate for free.
            </p>
            <p className="text-xl text-center text-gray-300">
              Upgrade to unlock more features.
            </p>
          </div>
        </div>
        <ul className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index: number) => (
            <Card
              as={"li"}
              key={index}
              className={` bg-gray-800 p-6 rounded-xl shadow-md flex flex-col `}
            >
              <h2 className="text-2xl font-semibold mb-4">{tier.name}</h2>
              <p className="text-3xl font-bold mb-4">{tier.price}</p>
              <ul className="mb-6">
                {tier.features.map((feature, index) => (
                  <li key={index} className="text-gray-300 mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={tier.cta.href}
                className={`${tier.color.default} hover:${tier.color.hover} text-center text-white py-2 px-4 rounded-md`}
              >
                <span className="text-center">{tier.cta.text}</span>
              </Link>
            </Card>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pricing;
export {};
