import apiClient from "../helpers/apiClient";


interface City {
    CityId: number,
    CountryId: number,
    Name: string,
    Code: string,
    IsActive: boolean
}

interface Country {
    CountryId: number,
    Name: string,
    Code: string,
    IsActive: boolean,
    MobileCode: string,
    Pattern: string
}

interface Enquiry {
    Name: string;
    EmailId: string;
    City: string;
    ContactNo: string;
    Message: string;
    CourseId: number;
    Utm: Record<string, string | null>;
    Experience: number;
}

interface Syllabus {
    // Define syllabus properties based on API response
    id: number;
    content: string;
    // Add more properties as needed
}

interface ApiResponse<T> {
    data: T;
}

const DataService = {
    SaveEnquiry,
    GetCityList,
    GetCountryList,
    GetSyllabus,
};

async function SaveEnquiry(model: Enquiry): Promise<ApiResponse<any>> {
    try {
        const response = await apiClient.post<ApiResponse<any>>('/Ads/SaveEnquiry', model);
        return response.data;
    } catch (err) {
        throw err;
    }
}

async function GetCityList(): Promise<ApiResponse<City[]>> {
    try {
        const response = await apiClient.get<ApiResponse<City[]>>('/Ads/GetCityList');
        return response.data;
    } catch (err) {
        throw err;
    }
}

async function GetCountryList(): Promise<ApiResponse<Country[]>> {
    try {
        const response = await apiClient.get<ApiResponse<Country[]>>('/Ads/GetCountryList');
        return response.data;
    } catch (err) {
        throw err;
    }
}

async function GetSyllabus(id: number): Promise<string> {
    try {
        const response = await apiClient.get<string>(`/Ads/GetSyllabus/${id}`);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export default DataService;