import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ArrowRight, Clock, Rocket, X } from 'lucide-react';
import DataService from '../services/DataService';

const Popup = ({ isCross = true, onClose, courseId }) => {
    // const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [countryData, setCountryData] = useState([]);
    const [utmData, setUtmData] = useState({});
    const [selectedCountry, setCountry] = useState('');

    console.log(courseId);

    const initialValues = {
        name: '',
        email: '',
        country: '',
        code: '+91',
        mobile: '',
        experience: 1,
        message: 'Enquiry',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Please Enter Name'),
        email: Yup.string()
            .required('Please Enter Email')
            .email('Please Enter Correct Email'),
        country: Yup.string().required('Please Select Country'),
        code: Yup.string().required('Please Select Code'),
        mobile: Yup.string().required('Please Enter Mobile'),
        experience: Yup.string().required('Please Select Experience'),
    });

    useEffect(() => {
        // Fetch UTM parameters
        setUtmData({
            UtmSource: searchParams.get('utm_source'),
            UtmMedium: searchParams.get('utm_medium'),
            UtmCampaign: searchParams.get('utm_campaign'),
            UtmTerm: searchParams.get('utm_term'),
        });

        // Fetch country list
        DataService.GetCountryList().then((res) => {
            setCountryData(res || []);
        });
    }, [searchParams]);

    // const trackLeadEvent = (user) => {
    //     if (leadCount === 0) {
    //         window.trackFbLeadEvent('INR', 30000);
    //         window.trackGtmLeadEvent(user.name, user.email, user.mobile);
    //         leadCount++;
    //     }
    // };

    const handleSubmit = (values) => {
        const userData = {
            Name: values.name,
            EmailId: values.email,
            Country: selectedCountry,
            ContactNo: values.code + values.mobile,
            Message: values.message,
            CourseId: courseId,
            Utm: utmData,
            Experience: values.experience,
        };

        DataService.SaveEnquiry(userData).then((res) => {
            if (res) {
                // Optionally hide modal if used
                // window.$('#enqModal').modal('hide');

                // Track lead event
                // trackLeadEvent(userData);

                // Save to localStorage
                localStorage.setItem('userData', JSON.stringify(userData));

                // Navigate to thank-you page
                // navigate(`/offer/thanks/${courseName}`);
            }
        });
        // console.log('Form submitted:', userData);
    };
    return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        // onClick={() => onClose()}
        >
            <div className="bg-white/80 relative dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700 animate-slide-in-right hover:shadow-3xl transition-all duration-300">
                {isCross &&
                    <X onClick={onClose} className='w-8 h-8 text-gray-400 dark:text-gray-700 cursor-pointer absolute top-3 right-3 z-100' />
                }
                <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 animate-pulse-subtle">
                        Reserve Your Seat Now
                    </h3>
                    {/* <div className="inline-flex items-center space-x-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 px-4 py-2 rounded-full text-sm font-medium animate-bounce-gentle">
                    <Clock className="w-4 h-4" />
                    <span>Limited Seats | Morning & Evening USA Batches</span>
                </div> */}
                </div>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ setFieldValue, isSubmitting }) => (
                        <Form className="space-y-4">
                            <div>
                                <Field
                                    name="name"
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                                />
                                <ErrorMessage
                                    name="name"
                                    component="div"
                                    className="text-red-600 text-sm mt-1"
                                />
                            </div>

                            <div>
                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-red-600 text-sm mt-1"
                                />
                            </div>

                            <div className="flex space-x-2">
                                <div className="w-1/3">
                                    <Field
                                        name="code"
                                        as="select"
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                                    >
                                        <option value="+91"> IN - India</option>
                                        <option value="+1"> US - United States</option>
                                        <option value="+61"> AU - Australia</option>
                                        <option value="+44"> GB - United Kingdom</option>
                                        <option value="+91"> IN - India</option>
                                        <option value="+966"> SA - Saudi Arabia</option>
                                        <option value="+971">
                                            {" "}
                                            AE - United Arab Emirates
                                        </option>
                                        <option value="+1"> CA - Canada</option>
                                        <option value="+65"> SG - Singapore</option>
                                        <option value="+41"> CH - Switzerland</option>
                                        <option value="+27"> ZA - South Africa</option>
                                        <option value="+43"> AT - Austria</option>
                                        <option value="+1242"> BS - Bahamas</option>
                                        <option value="+973"> BH - Bahrain</option>
                                        <option value="+880"> BD - Bangladesh</option>
                                        <option value="+32"> BE - Belgium</option>
                                        <option value="+975"> BT - Bhutan</option>
                                        <option value="+55"> BR - Brazil</option>
                                        <option value="+855"> KH - Cambodia</option>
                                        <option value="+61">
                                            {" "}
                                            CX - Christmas Island
                                        </option>
                                        <option value="+57"> CO - Colombia</option>
                                        <option value="+420"> CZ - Czech Republic</option>
                                        <option value="+45"> DK - Denmark</option>
                                        <option value="+1809">
                                            {" "}
                                            DO - Dominican Republic
                                        </option>
                                        <option value="+593"> EC - Ecuador</option>
                                        <option value="+20"> EG - Egypt</option>
                                        <option value="+679"> FJ - Fiji</option>
                                        <option value="+358"> FI - Finland</option>
                                        <option value="+33"> FR - France</option>
                                        <option value="+995"> GE - Georgia</option>
                                        <option value="+49"> DE - Germany</option>
                                        <option value="+233"> GH - Ghana</option>
                                        <option value="+350"> GI - Gibraltar</option>
                                        <option value="+30"> GR - Greece</option>
                                        <option value="+299"> GL - Greenland</option>
                                        <option value="+852"> HK - Hong Kong</option>
                                        <option value="+36"> HU - Hungary</option>
                                        <option value="+354"> IS - Iceland</option>
                                        <option value="+62"> ID - Indonesia</option>
                                        <option value="+964"> IQ - Iraq</option>
                                        <option value="+353"> IE - Ireland</option>
                                        <option value="+972"> IL - Israel</option>
                                        <option value="+39"> IT - Italy</option>
                                        <option value="+81"> JP - Japan</option>
                                        <option value="+44"> JE - Jersey</option>
                                        <option value="+962"> JO - Jordan</option>
                                        <option value="+7"> KZ - Kazakhstan</option>
                                        <option value="+254"> KE - Kenya</option>
                                        <option value="+965"> KW - Kuwait</option>
                                        <option value="+265"> MW - Malawi</option>
                                        <option value="+60"> MY - Malaysia</option>
                                        <option value="+960"> MV - Maldives</option>
                                        <option value="+223"> ML - Mali</option>
                                        <option value="+692">
                                            {" "}
                                            MH - Marshall Islands
                                        </option>
                                        <option value="+52"> MX - Mexico</option>
                                        <option value="+264"> NA - Namibia</option>
                                        <option value="+977"> NP - Nepal</option>
                                        <option value="+64"> NZ - New Zealand</option>
                                        <option value="+234"> NG - Nigeria</option>
                                        <option value="+47"> NO - Norway</option>
                                        <option value="+968"> OM - Oman</option>
                                        <option value="+92"> PK - Pakistan</option>
                                        <option value="+507"> PA - Panama</option>
                                        <option value="+595"> PY - Paraguay</option>
                                        <option value="+51"> PE - Peru</option>
                                        <option value="+63"> PH - Philippines</option>
                                        <option value="+48"> PL - Poland</option>
                                        <option value="+351"> PT - Portugal</option>
                                        <option value="+974"> QA - Qatar</option>
                                        <option value="+82"> KR - South Korea</option>
                                        <option value="+211"> SS - South Sudan</option>
                                        <option value="+34"> ES - Spain</option>
                                        <option value="+94"> LK - Sri Lanka</option>
                                        <option value="+268"> SZ - Swaziland</option>
                                        <option value="+46"> SE - Sweden</option>
                                        <option value="+886"> TW - Taiwan</option>
                                        <option value="+992"> TJ - Tajikistan</option>
                                        <option value="+66"> TH - Thailand</option>
                                        <option value="+31"> NL - The Netherlands</option>
                                        <option value="+90"> TR - Turkey</option>
                                        <option value="+380"> UA - Ukraine</option>
                                        <option value="+699">
                                            {" "}
                                            UM - United States Minor Outlying Islands
                                        </option>
                                        <option value="+998"> UZ - Uzbekistan</option>
                                        <option value="+678"> VU - Vanuatu</option>
                                        <option value="+39"> VA - Vatican</option>
                                        <option value="+58"> VE - Venezuela</option>
                                        <option value="+84"> VN - Vietnam</option>
                                        <option value="+1284">
                                            {" "}
                                            VG - Virgin Islands (British)
                                        </option>
                                        <option value="+1340">
                                            {" "}
                                            VI - Virgin Islands (U.S.)
                                        </option>
                                        <option value="+967"> YE - Yemen</option>
                                        <option value="+260"> ZM - Zambia</option>
                                        <option value="+00"> OH - Others</option>
                                        {/* Add more options as needed */}
                                    </Field>
                                    <ErrorMessage
                                        name="code"
                                        component="div"
                                        className="text-red-600 text-sm mt-1"
                                    />
                                </div>
                                <div className="w-2/3">
                                    <Field
                                        name="mobile"
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                                    />
                                    <ErrorMessage
                                        name="mobile"
                                        component="div"
                                        className="text-red-600 text-sm mt-1"
                                    />
                                </div>
                            </div>

                            {countryData && Array.isArray(countryData) &&

                                <div>
                                    <Field
                                        name="country"
                                        as="select"
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                                        onChange={(e) => {
                                            setFieldValue('country', e.target.value);
                                            const selectedOption = countryData.find(
                                                (item) => item.CountryId == e.target.value
                                            );
                                            setCountry(selectedOption ? selectedOption.Name : '');
                                        }}
                                    >
                                        <option value="">Select Country</option>
                                        {countryData.map((item) => (
                                            <option value={item.CountryId} key={item.CountryId}>
                                                {item.Name}
                                            </option>
                                        ))}
                                    </Field>
                                    <ErrorMessage
                                        name="country"
                                        component="div"
                                        className="text-red-600 text-sm mt-1"
                                    />
                                </div>
                            }


                            <div>
                                <Field
                                    name="experience"
                                    as="select"
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                                >
                                    <option value="1">Select Experience</option>
                                    <option value="2">1-3 years</option>
                                    <option value="4">3-5 years</option>
                                    <option value="7">5-8 years</option>
                                    <option value="8">8+ years</option>
                                </Field>
                                <ErrorMessage
                                    name="experience"
                                    component="div"
                                    className="text-red-600 text-sm mt-1"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 animate-gradient-x hover:animate-pulse group"
                            >
                                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
                                <span>Get Free Career Consultation</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                            </button>
                        </Form>
                    )}
                </Formik>
            </div></div>
    );
};

export default Popup;