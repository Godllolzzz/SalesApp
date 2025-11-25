import React from 'react';
import microsoftImg from '../assests/images/companies/microsoft.png';
import googleImg from '../assests/images/companies/google.png';
import metaImg from '../assests/images/companies/meta.svg';
import amazonImg from '../assests/images/companies/amazon.png';
import ibmImg from '../assests/images/companies/ibm.png';
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

const Alumni = () => {
  return (
    // Yeh div shuru hua tha, ab properly close kar rahe hain
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 p-12 shadow-2xl overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
          Our Alumni Work At
        </h3>
        <p className="text-cyan-300 font-semibold mb-12">
          Join thousands of developers at top companies
        </p>

        {/* Logos Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 md:gap-10 justify-items-center items-center">
          {companyLogos.map((company, index) => (
            <img
              key={index}
              src={company.src}
              alt={company.alt}
              loading="lazy"
              className="h-10 md:h-12 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 hover:scale-110 hover:brightness-100 hover:invert-0 transition-all duration-500"
            />
          ))}
        </div>
      </div>
    </div>
  ); // Yahan return close hua
};

export default Alumni;