import { useState } from 'react';

export default function LoanCalculator() {
  const [activeTab, setActiveTab] = useState<'blu' | 'mellat'>('blu');
  const [loanAmount, setLoanAmount] = useState(10);
  const [installments, setInstallments] = useState<12 | 18 | 24>(12);

  const calculateResults = () => {
    const amount = loanAmount * 1000000;
    const interestRate = 0.23;
    const operationFee = 3000000;
    const totalInterest = amount * interestRate;
    const totalPayment = amount + totalInterest + operationFee;
    const monthlyPayment = totalPayment / installments;

    return {
      totalInterest: Math.floor(totalInterest).toLocaleString('fa-IR'),
      monthlyPayment: Math.floor(monthlyPayment).toLocaleString('fa-IR'),
      operationFee: operationFee.toLocaleString('fa-IR'),
      totalPayment: Math.floor(totalPayment).toLocaleString('fa-IR'),
    };
  };

  const results = calculateResults();

  return (
    <section className="bg-white py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-[1030px] mx-auto">
          {/* Bank Tabs */}
          <div className="flex items-center justify-center gap-[1px] rounded-xl lg:rounded-[18px] bg-[#F4F6FA] mb-12 lg:mb-20">
            <button
              onClick={() => setActiveTab('mellat')}
              className={`flex-1 h-12 lg:h-[74px] flex items-center justify-center gap-2 lg:gap-3 transition-all rounded-r-xl lg:rounded-r-[18px] ${
                activeTab === 'mellat' ? 'text-[#4F545E]' : 'text-[#91969F]'
              }`}
            >
              <img
                src="/images/mellaticon.png"
                alt="بانک ملت"
                className="w-7 h-7 lg:w-10 lg:h-10"
              />
              <span className={`text-base lg:text-2xl ${activeTab === 'mellat' ? 'font-bold' : 'font-medium'}`}>بانک ملت</span>
              {activeTab === 'mellat' && (
                <div className="absolute bottom-0 left-1/4 w-6 lg:w-9 h-[2px] lg:h-[3px] bg-[#4F545E] rounded-t-full hidden lg:block" />
              )}
            </button>

            <div className="w-[1px] h-5 lg:h-[29px] bg-[#D6D9DF]" />

            <button
              onClick={() => setActiveTab('blu')}
              className={`relative flex-1 h-12 lg:h-[74px] flex items-center justify-center gap-2 lg:gap-3 transition-all rounded-l-xl lg:rounded-l-[18px] ${
                activeTab === 'blu' ? 'text-[#4F545E]' : 'text-[#91969F]'
              }`}
            >
              <img
                src="/images/bluicon.png"
                alt="بلو بانک"
                className="w-7 h-7 lg:w-10 lg:h-10"
              />
              <span className={`text-base lg:text-2xl ${activeTab === 'blu' ? 'font-bold' : 'font-medium'}`}>بلو بانک</span>
              {activeTab === 'blu' && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 lg:w-9 h-[2px] lg:h-[3px] bg-[#4F545E] rounded-t-full" />
              )}
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 relative">
            {/* Desktop divider */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1.5px] bg-[#D6D9DF] -translate-x-1/2" />

            {/* Right Side - Calculator */}
            <div className="flex flex-col items-end gap-6 lg:gap-8 lg:pr-12">
              <h3 className="text-sm lg:text-[22px] font-bold text-[#242933] text-right">
                مبلغ اعتبار و تعداد اقساط رو مشخص کن.
              </h3>

              {/* Loan Amount Slider */}
              <div className="w-full flex flex-col gap-2">
                <div className="h-9 lg:h-[36px] px-4 bg-[#0C74C7]/10 rounded-lg flex items-center justify-center">
                  <span className="text-sm lg:text-[22px] font-medium text-[#242933]">
                    {loanAmount}۰ میلیون تومن
                  </span>
                </div>

                <div className="relative w-full h-1 lg:h-1 my-4">
                  <div className="absolute inset-0 bg-[#E8EAEE] rounded-full" />
                  <div 
                    className="absolute right-0 top-0 h-full bg-[#0C74C7] rounded-full transition-all"
                    style={{ width: `${((loanAmount - 10) / 140) * 100}%` }}
                  />
                  <input
                    type="range"
                    min="10"
                    max="150"
                    step="1"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div 
                    className="absolute top-1/2 -translate-y-1/2 w-6 h-6 lg:w-[34px] lg:h-[34px] bg-[#0C74C7] border-2 border-white rounded-full shadow-lg transition-all pointer-events-none"
                    style={{ right: `calc(${((loanAmount - 10) / 140) * 100}% - 12px)` }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full" />
                  </div>
                </div>

                <div className="flex justify-between text-sm lg:text-[22px] font-medium text-[#91969F]">
                  <span>۱۵۰ میلیون تومن</span>
                  <span>۱۰ میلیون تومن</span>
                </div>
              </div>

              {/* Installment Options */}
              <div className="flex items-center gap-2 lg:gap-[14px] w-full">
                {[24, 18, 12].map((months) => (
                  <button
                    key={months}
                    onClick={() => setInstallments(months as 12 | 18 | 24)}
                    className={`flex-1 h-11 lg:h-[68px] rounded-lg lg:rounded-xl border flex items-center justify-center gap-1 lg:gap-2 transition-all ${
                      installments === months ? 'border-[#0C74C7]' : 'border-[#D6D9DF]'
                    }`}
                  >
                    <span className="text-sm lg:text-[22px] font-bold text-[#4F545E]">
                      {months === 12 ? '12' : months === 18 ? '۱۸' : '۲۴'} ماهه
                    </span>
                    <div className={`w-5 h-5 lg:w-[32px] lg:h-[32px] rounded-full border flex items-center justify-center p-2 ${
                      installments === months ? 'border-[#0C74C7]' : 'border-[#91969F]'
                    }`}>
                      {installments === months && (
                        <div className="w-full h-full rounded-full bg-[#0C74C7]" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile divider */}
            <div className="lg:hidden h-[1px] bg-[#D6D9DF] my-4" />

            {/* Left Side - Results */}
            <div className="flex flex-col gap-6 lg:gap-8 lg:pl-12">
              <div className="rounded-lg lg:rounded-xl p-3 flex items-center justify-between border border-transparent lg:border-[#D6D9DF]/0">
                <div className="flex items-center gap-2 lg:gap-3">
                  <img 
                    src="/images/bluicon.png" 
                    alt="" 
                    className="w-6 h-6 lg:w-7 lg:h-7"
                  />
                  <span className="text-sm lg:text-sm font-medium lg:font-medium text-[#242933]">وام بلوبانک</span>
                </div>
                <span className="text-sm lg:text-sm font-bold text-[#242933]">توضیحات تکمیلی</span>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-base lg:text-[25px] font-medium text-[#91969F]">#۲۳</span>
                    <span className="text-sm lg:text-[28px] font-medium text-[#4F545E]">سود سالیانه</span>
                  </div>
                  <div className="flex items-baseline gap-1 text-left">
                    <span className="text-xs lg:text-[12px] font-medium text-[#4F545E]">تومن</span>
                    <span className="text-sm lg:text-[25px] font-bold lg:font-normal text-[#4F545E]">{results.totalInterest}</span>
                  </div>
                </div>

                <div className="flex items-start justify-between">
                  <span className="text-sm lg:text-[28px] font-medium text-[#4F545E]">مبلغ هرقسط</span>
                  <div className="flex items-baseline gap-1 text-left">
                    <span className="text-xs lg:text-[12px] font-medium text-[#4F545E]">تومن</span>
                    <span className="text-sm lg:text-[25px] font-bold lg:font-normal text-[#4F545E]">{results.monthlyPayment}</span>
                  </div>
                </div>

                <div className="flex items-start justify-between">
                  <span className="text-sm lg:text-[28px] font-medium text-[#4F545E]">هزینه عملیات</span>
                  <div className="flex items-baseline gap-1 text-left">
                    <span className="text-xs lg:text-[12px] font-medium text-[#4F545E]">تومن</span>
                    <span className="text-sm lg:text-[25px] font-bold lg:font-normal text-[#4F545E]">{results.operationFee}</span>
                  </div>
                </div>

                <div className="flex items-start justify-between">
                  <span className="text-sm lg:text-[28px] font-medium text-[#4F545E]">مبلغ بازپرداخت نهایی</span>
                  <div className="flex items-baseline gap-1 text-left">
                    <span className="text-xs lg:text-[12px] font-medium text-[#0C74C7]">تومن</span>
                    <span className="text-sm lg:text-[25px] font-bold lg:font-normal text-[#0C74C7]">{results.totalPayment}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
