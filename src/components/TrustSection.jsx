import { Award, Cloud, Users, TrendingUp, Calendar } from 'lucide-react';
import microsoftImg from '../assests/images/companies/microsoft.png';
import googleImg from '../assests/images/companies/google.svg';
import metaImg from '../assests/images/companies/meta.svg';
import amazonImg from '../assests/images/companies/amazon.svg';
import ibmImg from '../assests/images/companies/ibm.svg';
import adobeImg from '../assests/images/companies/adobe.svg';
import capgeminiImg from '../assests/images/companies/capgimini.png';
import tcsImg from '../assests/images/companies/tcs.png';
import ciscoImg from '../assests/images/companies/cisco.png';
import samsungImg from '../assests/images/companies/samsung.svg';
import oracleImg from '../assests/images/companies/oracle.svg';
import infosysImg from '../assests/images/companies/infosys.png';
import paytmImg from '../assests/images/companies/paytm.svg';
import twitterImg from '../assests/images/companies/twitter.png';
import cognizantImg from '../assests/images/companies/cognizant.svg';
import accentureImg from '../assests/images/companies/accenture.svg';
import dellImg from '../assests/images/companies/dell.png';
import techmImg from '../assests/images/companies/techm.png';

const companyLogos = [
    { src: microsoftImg, alt: 'Microsoft' },
    { src: googleImg, alt: 'Google' },
    { src: metaImg, alt: 'Meta' },
    { src: amazonImg, alt: 'Amazon' },
    { src: ibmImg, alt: 'IBM' },
    { src: adobeImg, alt: 'Adobe' },
    { src: capgeminiImg, alt: 'Capgemini' },
    { src: tcsImg, alt: 'TCS' },
    { src: ciscoImg, alt: 'Cisco' },
    { src: samsungImg, alt: 'Samsung' },
    { src: oracleImg, alt: 'Oracle' },
    { src: infosysImg, alt: 'Infosys' },
    { src: paytmImg, alt: 'Paytm' },
    { src: twitterImg, alt: 'X (Twitter)' },
    { src: cognizantImg, alt: 'Cognizant' },
    { src: accentureImg, alt: 'Accenture' },
    { src: dellImg, alt: 'Dell' },
    { src: techmImg, alt: 'Tech Mahindra' },
];

function TrustSection() {
    const trustPoints = [
        { icon: Award, text: 'Learn From Microsoft MVPs & Architects', color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-50 dark:bg-blue-900/20' },
        { icon: Cloud, text: 'Real Cloud Sandbox + Hands-on Labs', color: 'from-cyan-500 to-teal-500', bgColor: 'bg-cyan-50 dark:bg-cyan-900/20' },
        { icon: Users, text: '2,00,000+ Developers Trained', color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-50 dark:bg-green-900/20' },
        { icon: TrendingUp, text: 'Programs Built for 15–55 LPA Roles', color: 'from-orange-500 to-amber-500', bgColor: 'bg-orange-50 dark:bg-orange-900/20' },
        { icon: Calendar, text: '4–6 Month Job-Focused Curriculum', color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-50 dark:bg-purple-900/20' },
    ];

    return (
        <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            <div className="max-w-7xl mx-auto">

                {/* Why Choose Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 dark:text-white">
                        Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">ScholarHat</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        Trusted by developers worldwide for career transformation
                    </p>
                </div>

                {/* Trust Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
                    {trustPoints.map((point, index) => {
                        const Icon = point.icon
                        return (
                            <div
                                key={index}
                                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-slate-200 dark:border-slate-700 overflow-hidden"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${point.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                <div className="relative z-10">
                                    <div className={`w-16 h-16 ${point.bgColor} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.05)]`}>
                                        <div className={`w-14 h-14 bg-gradient-to-br ${point.color} rounded-xl flex items-center justify-center`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                    <p className="text-sm font-bold text-slate-800 dark:text-white leading-snug">{point.text}</p>
                                </div>

                                <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${point.color} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                            </div>
                        )
                    })}
                </div>

                {/* Alumni Companies Section */}
                <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 rounded-3xl p-12 shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>

                    <div className="relative z-10 text-center">
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
                            Our Alumni Work At
                        </h3>
                        <p className="text-cyan-300 font-semibold mb-12">
                            Join thousands of developers at top companies
                        </p>

                        {/* Full Color Logos – Minimum 4 rows */}
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 md:gap-10 justify-items-center items-center">
                            {companyLogos.map((company, index) => (
                                <img
                                    key={index}
                                    src={company.src}
                                    alt={company.alt}
                                    loading="lazy"
                                    className="h-10 md:h-12 w-auto object-contain
                       filter invert brightness-0 brightness-[0] hue-rotate-180 
                       opacity-85 hover:opacity-100 
                       hover:scale-125 hover:brightness-150 
                       transition-all duration-400"
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default TrustSection;