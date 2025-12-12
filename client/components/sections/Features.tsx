export default function Features() {
  const features = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets%2F2ccfcdc057424b9eb03a0d097a076671%2F7c669fa76db5482d87d7c0997efab63b?format=webp&width=800",
      title: "دسترسی سریع به اعتبار",
      description: "بررسی و تایید درخواست در کمتر از یک ساعت، بدون نیاز به مراجعه حضوری و ارائه مدارک پیچیده.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets%2F2ccfcdc057424b9eb03a0d097a076671%2Fa8a7f39fc3004132bfe922b5dcb35520?format=webp&width=800",
      title: "خرید با اعتبار",
      description: "امکان خرید کالا و خدمات مورد نیاز شما بدون دغدغه، فراهم‌شده است؛ هزینه کالا یا خدمات فقط از طریق کسر از حقوق شما پرداخت می‌شود.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets%2F2ccfcdc057424b9eb03a0d097a076671%2Ff192fd100bd647ba8a9fd33672dd9d5d?format=webp&width=800",
      title: "بازپرداخت شفاف",
      description: "تمامی اطلاعات اقساط و هزینه‌ها در پنل کاربری شما قابل مشاهده است؛ تاریخ و مبلغ هر قسط به‌صورت شفاف و واضح اعلام می‌شود.",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-[1121px] mx-auto">
          <h2 className="text-2xl font-bold text-[#242933] text-center mb-16">
            امکانات ثروت‌لند
          </h2>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-40">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center gap-6 text-center">
                <img 
                  src={feature.icon} 
                  alt={feature.title}
                  className="w-32 h-32 object-contain"
                />
                <h3 className="text-lg font-bold text-[#242933]">
                  {feature.title}
                </h3>
                <p className="text-sm font-medium leading-6 text-[#4F545E]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
