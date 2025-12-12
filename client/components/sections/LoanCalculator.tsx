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
      totalInterest: totalInterest.toLocaleString('fa-IR'),
      monthlyPayment: monthlyPayment.toLocaleString('fa-IR'),
      operationFee: operationFee.toLocaleString('fa-IR'),
      totalPayment: totalPayment.toLocaleString('fa-IR'),
    };
  };

  const results = calculateResults();

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-[1030px] mx-auto">
          {/* Bank Tabs */}
          <div className="flex items-center justify-center gap-[1px] rounded-xl md:rounded-[18px] bg-[#F4F6FA] mb-12 md:mb-16 lg:mb-20">
            <button
              onClick={() => setActiveTab('mellat')}
              className={`flex-1 h-12 md:h-16 lg:h-[74px] flex items-center justify-center gap-2 md:gap-3 transition-all ${
                activeTab === 'mellat' ? 'text-[#91969F]' : 'text-[#91969F]'
              }`}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2ccfcdc057424b9eb03a0d097a076671%2F2bc219b65d994291819d4cbe6f7e7a9a?format=webp&width=800"
                alt="بانک ملت"
                className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
              />
              <span className="text-sm md:text-lg lg:text-2xl font-medium">بانک ملت</span>
            </button>

            <div className="w-[1px] h-5 md:h-6 lg:h-[29px] bg-[#D6D9DF]" />

            <button
              onClick={() => setActiveTab('blu')}
              className={`relative flex-1 h-12 md:h-16 lg:h-[74px] flex items-center justify-center gap-2 md:gap-3 transition-all ${
                activeTab === 'blu' ? 'text-[#4F545E]' : 'text-[#91969F]'
              }`}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2ccfcdc057424b9eb03a0d097a076671%2F4a849dc9be4b42efa92a4ee6e94c221b?format=webp&width=800"
                alt="بلو بانک"
                className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
              />
              <span className="text-sm md:text-lg lg:text-2xl font-bold">بلو بانک</span>
              {activeTab === 'blu' && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 md:w-10 h-[2px] md:h-1 bg-[#4F545E] rounded-t-full" />
              )}
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Right Side - Calculator */}
            <div className="flex flex-col items-end gap-8">
              <h3 className="text-[22px] font-bold text-[#242933] text-right">
                مبلغ اعتبار و تعداد اقساط رو مشخص کن.
              </h3>

              {/* Loan Amount Slider */}
              <div className="w-full flex flex-col gap-2">
                <div className="h-9 px-4 bg-[#0C74C7]/10 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-medium text-[#242933]">
                    {loanAmount}۰ میلیون تومن
                  </span>
                </div>

                <div className="relative w-full h-1">
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
                    className="absolute top-1/2 -translate-y-1/2 w-[34px] h-[34px] bg-[#0C74C7] border-2 border-white rounded-full shadow-lg transition-all"
                    style={{ right: `calc(${((loanAmount - 10) / 140) * 100}% - 17px)` }}
                  />
                </div>

                <div className="flex justify-between text-sm font-medium text-[#91969F]">
                  <span>۱۵۰ میلیون تومن</span>
                  <span>۱۰ میلیون تومن</span>
                </div>
              </div>

              {/* Installment Options */}
              <div className="flex items-center gap-2 md:gap-3 w-full">
                <button
                  onClick={() => setInstallments(24)}
                  className={`flex-1 h-11 md:h-14 lg:h-[68px] rounded-lg md:rounded-xl border flex items-center justify-center gap-1 md:gap-2 transition-all ${
                    installments === 24 ? 'border-[#0C74C7]' : 'border-[#D6D9DF]'
                  }`}
                >
                  <span className="text-sm md:text-lg lg:text-[22px] font-bold text-[#4F545E]">۲۴ ماهه</span>
                  <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full border flex items-center justify-center ${
                    installments === 24 ? 'border-[#0C74C7]' : 'border-[#91969F]'
                  }`}>
                    {installments === 24 && <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#0C74C7]" />}
                  </div>
                </button>

                <button
                  onClick={() => setInstallments(18)}
                  className={`flex-1 h-11 md:h-14 lg:h-[68px] rounded-lg md:rounded-xl border flex items-center justify-center gap-1 md:gap-2 transition-all ${
                    installments === 18 ? 'border-[#0C74C7]' : 'border-[#D6D9DF]'
                  }`}
                >
                  <span className="text-sm md:text-lg lg:text-[22px] font-bold text-[#4F545E]">۱۸ ماهه</span>
                  <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full border flex items-center justify-center ${
                    installments === 18 ? 'border-[#0C74C7]' : 'border-[#91969F]'
                  }`}>
                    {installments === 18 && <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#0C74C7]" />}
                  </div>
                </button>

                <button
                  onClick={() => setInstallments(12)}
                  className={`flex-1 h-11 md:h-14 lg:h-[68px] rounded-lg md:rounded-xl border flex items-center justify-center gap-1 md:gap-2 transition-all ${
                    installments === 12 ? 'border-[#0C74C7]' : 'border-[#D6D9DF]'
                  }`}
                >
                  <span className="text-sm md:text-lg lg:text-[22px] font-bold text-[#4F545E]">12 ماهه</span>
                  <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full border flex items-center justify-center ${
                    installments === 12 ? 'border-[#0C74C7]' : 'border-[#91969F]'
                  }`}>
                    {installments === 12 && <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#0C74C7]" />}
                  </div>
                </button>
              </div>
            </div>

            {/* Left Side - Results */}
            <div className="flex flex-col gap-8">
              <div className="h-[1px] bg-[#D6D9DF] lg:hidden" />
              <div className="hidden lg:block w-[1px] h-full bg-[#D6D9DF] absolute left-1/2 top-0" />

              <div className="rounded-lg p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets%2F2ccfcdc057424b9eb03a0d097a076671%2F4a849dc9be4b42efa92a4ee6e94c221b?format=webp&width=800" 
                    alt="" 
                    className="w-7 h-7"
                  />
                  <span className="text-sm font-medium text-[#242933]">وام بلوبانک</span>
                </div>
                <span className="text-sm font-bold text-[#242933]">توضیحات تکمیلی</span>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-base text-[#91969F]">#۲۳</span>
                    <span className="text-sm font-medium text-[#4F545E]">سود سالیانه</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-[#4F545E]">تومن</span>
                    <span className="text-sm font-bold text-[#4F545E]">{results.totalInterest}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[#4F545E]">مبلغ هرقسط</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-[#4F545E]">تومن</span>
                    <span className="text-sm font-bold text-[#4F545E]">{results.monthlyPayment}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[#4F545E]">هزینه عملیات</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-[#4F545E]">تومن</span>
                    <span className="text-sm font-bold text-[#4F545E]">{results.operationFee}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[#4F545E]">مبلغ بازپرداخت نهایی</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-[#0C74C7]">تومن</span>
                    <span className="text-sm font-bold text-[#0C74C7]">{results.totalPayment}</span>
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
