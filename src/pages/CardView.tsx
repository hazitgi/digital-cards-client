import React from 'react';
import logo from "../assets/logo.png"


const CardView: React.FC = () => {

    return (
        <>
            <div className="flex flex-col items-start md:justify-center min-h-screen md:p-3 bg-blue-50/20">
                <div
                    className="w-full md:w-auto md:min-h-[350px] md:max-w-[600px] md:rounded-[16px] md:border-[1px] pb-[124px] md:pb-[0] border-[#E9E9EB] md:m-auto overflow-hidden relative MuiBox-root css-ck9owp"
                    style={{
                        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px 0px, rgba(0, 0, 0, 0.06) 0px 2px 4px 0px',
                        background: 'rgb(255, 255, 255)'
                    }}
                >
                    <div className="w-full flex flex-col min-w-full md:min-w-[600px]" id="scrollbar-2">
                        <div>
                            <div
                                className="w-full"
                                style={{
                                    backgroundImage: 'url("/assets/defaultTemplateBackground.png")',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center center',
                                    height: '121px',
                                    minHeight: '121px'
                                }}
                            ></div>
                            <div className="flex justify-center mt-[-50px] mb-[12px]">
                                <div className="flex justify-center items-center w-[96px] h-[96px] rounded-full bg-[#F8F9FB] border-[2px] border-[#E9E9EB]">
                                    <p className="text-[28px] text-[#89898A]">h</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center px-[24px]">
                                <p className="text-[18px] font-medium text-center">hazi tgi</p>
                            </div>
                        </div>
                        <div
                            className="w-full px-[24px] py-[20px] md:py-[40px] z-20 fixed md:sticky bottom-0 left-0 mt-auto MuiBox-root css-19mftks"
                            style={{ background: 'rgb(255, 255, 255)' }}
                        >
                            <a href="https://storage.googleapis.com/codebooth-a4b70.appspot.com/vcf-files%2FPsVqH9x1KBREfulIkRg226ubYkp1%2Fhazi%20tgi_20240622T10_05_03.856Z.vcf">
                                <button
                                    type="button"
                                    form="edit-form"
                                    className="flex items-center justify-center shrink-0 w-full rounded-[6px] btn h-[38px] transition-colors outline-none duration-300 px-6 py-2 text-center text-sm text-white hover:bg-blue-500/80 bg-[#2C71F6] shadow-sm font-medium"
                                    tabIndex={0}
                                >
                                    <div className="flex items-center justify-center w-full gap-2">
                                        <span className="block w-full">Save contacts</span>
                                    </div>
                                </button>
                            </a>
                            <button
                                type="button"
                                className="flex items-center justify-center w-full rounded-[6px] bg-[#FFFFFF] hover:bg-gray-200 border-[1px] border-[#D8D8DA] font-semibold h-[38px] text-[14px] mt-[8px]"
                            >
                                <span>Exchange details</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex gap-x-3 md:fixed md:bottom-5 w-full justify-center">
                    <span>Powered by</span>
                    <span>
                        <img
                            src={logo}
                            className="w-6 dark:filter dark:invert dark:hue-rotate-180 dark:contrast-200"
                            alt="logo"
                        />
                    </span>
                </div>
            </div>
        </>
    );
};

export default CardView;
