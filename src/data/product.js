const productData = [
  {
    id: 1,
    service: "Claude AI",
    banner: "/claude-banner.jpg",
    packages: [
      {
        package_name: "Sharing Account",
        price_package: 326900,
        max_member: 5,
        price_member: 0,
        admin: 14620,
        amount: 0,
      },
      {
        package_name: "Private Account",
        price_package: 328000,
        max_member: 1,
        admin: 22000,
        amount: 0,
      },
    ],
    status: "true",
  },
  {
    id: 2,
    service: "Chat GPT AI",
    banner: "/chatgpt-banner.webp",
    packages: [
      {
        package_name: "Sharing Account",
        price_package: 326900,
        max_member: 10,
        price_member: 0,
        admin: 3310,
        amount: 0,
      },
      {
        package_name: "Private Account",
        price_package: null,
        max_member: null,
        price_member: null,
        admin: null,
        amount: null,
      },
    ],
    status: "true",
  },
  {
    id: 3,
    service: "Netflix",
    banner: "/netflix-banner.jpg",
    packages: [
      {
        package_name: "Sharing Account",
        price_package: 186000,
        max_member: 4,
        price_member: 0,
        admin: 3500,
        amount: 0,
      },
      {
        package_name: "Private Account",
        price_package: null,
        max_member: null,
        price_member: null,
        admin: null,
        amount: null,
      },
    ],
    status: "true",
  },
];

export default productData;
