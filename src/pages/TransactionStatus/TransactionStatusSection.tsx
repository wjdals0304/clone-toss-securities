import Image from 'next/image';

export default function TransactionStatusSection() {
  return (
    <section>
      <div className="flex flex-col p-2 gap-[2px] mb-8">
        <span className="text-[20px] font-weight-bold text-[#e4e4e5]">
          국내 투자자별 거래 현황
        </span>
      </div>
      <div>
        <div className="position-relative flex max-width-[100%] height-[40px]">
          <button className="flex items-center justify-center position-relative border-none background-color-[transparent]">
            <span className="font-size-[15px] text-[#c3c3c6] font-weight-normal">
              순매수
            </span>
          </button>
          <button className="flex items-center justify-center position-relative border-none background-color-[transparent]">
            <span className="font-size-[15px] text-[#c3c3c6] font-weight-normal">
              순매도
            </span>
          </button>
        </div>
      </div>
      <div className="relative grid grid-cols-[minmax(10px,1fr)]">
        <div className="grid auto-flow-column auto-cols-max w-max">
          <ol>
            <li className="list-none w-[320px] margin-right-[40px]">
              <div>
                <div className="flex gap-[8px] align-center margin-[8px 0]">
                  <div className="flex gap-[8px] align-center margin-[8px 0]">
                    <div className="padding-[8px] flex flex-column gap-[2px]">
                      <div className="flex">
                        <span className="padding-right-[6px] font-size-[17px] font-weight-bold text-[#e4e4e5]">
                          외국인
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-column">
                <div className="flex items-center border-radius-[10px]">
                  <div className="flex padding-[8px 4px 8px 8px] items-center gap-[8px]">
                    <span className="font-size-[15px] font-weight-bold text-[#449bff]">
                      1
                    </span>
                    <div className="width-[34px] height-[34px] position-relative border-radius-[50%]">
                      <Image
                        src=""
                        alt="upbit"
                        className="width-[34px] height-[34px]"
                      />
                    </div>
                  </div>
                  <div></div>
                </div>
                <div className="flex flex-1">
                  <div className="grid grid-cols-[minmax(0px,2fr)_minmax(0px,1fr)] min-height-[40px]">
                    <div className="flex flex-col">
                      <span className="text-[15px] font-weight-bold text-[#e4e4e5]">
                        두산에너빌리티
                      </span>
                      <span>
                        <span className="text-[15px] font-weight-bold text-[#e4e4e5]">
                          23,500원
                        </span>
                        <span className="text-[15px] font-weight-bold text-[#e4e4e5]">
                          8%
                        </span>
                      </span>
                    </div>
                    <span className="text-[15px] font-weight-bold text-[#e4e4e5]">
                      133억원
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
