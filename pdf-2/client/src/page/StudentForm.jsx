import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import PersonalDetails from "../components/form-steps/PersonalDetails";
import FamilyDetails from "../components/form-steps/FamilyDetails";
import AddressDetails from "../components/form-steps/AddressDetails";
import { useDispatch, useSelector } from "react-redux";
import { addStudentSlice, allStudentSlice } from "../redux/slice/studentSlice";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { endpoint_generate_pdf } from "../api/apiUrl/apiUrl";

const steps = ["Personal", "Family", "Address"];

export default function StudentForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isStudentLoading } = useSelector((state) => state.student);

    const methods = useForm({
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            family_details: {
                father_name: "",
                mother_name: "",
                local_gurdian_name: "",
                gurdian_contact_no: ""
            },
            address: {
                street: "",
                city: "",
                full_address: "",
                country: "",
                pin: ""
            }
        }
    });

    const [step, setStep] = useState(0);

    const onSubmit = (data) => {
        // console.log("SUBMITTED AT STEP:", step);
        // console.log("Final Submitted Data:", data);

        dispatch(addStudentSlice(data))
            .then((res) => {
                // console.log('Response for adding student details', res);

                if (res.meta.requestStatus === "fulfilled") {

                    // toast("Student added successfully");
                    // dispatch(allStudentSlice());

                    const studentId = res.payload.data._id;

                    window.open(`${import.meta.env.VITE_API_URL}${endpoint_generate_pdf}${studentId}`, "_blank");

                    navigate("/");
                } else {
                    toast("Something went wrong");
                }
            })
            .catch((err) => {
                console.error("Error occurred:", err);
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-700 to-indigo-900 flex justify-center items-center">
            <div className="bg-white p-8 rounded-xl w-full max-w-xl shadow-lg">

                {/* Progress Bar */}
                <div className="flex justify-between mb-8">
                    {steps.map((label, index) => (
                        <div
                            key={label}
                            className={`flex-1 text-center text-xs uppercase font-semibold ${index <= step ? "text-pink-600" : "text-gray-400"
                                }`}
                        >
                            {label}
                        </div>
                    ))}
                </div>

                <FormProvider {...methods}>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") e.preventDefault();
                        }}
                    >
                        {step === 0 && <PersonalDetails />}
                        {step === 1 && <FamilyDetails />}
                        {step === 2 && <AddressDetails />}

                        <div className="flex justify-between mt-6">
                            {step > 0 && (
                                <button
                                    type="button"
                                    onClick={() => setStep(step - 1)}
                                    className="px-5 py-2 rounded-full bg-gray-400 text-white"
                                >
                                    Previous
                                </button>
                            )}

                            {step < steps.length - 1 ? (
                                <button
                                    type="button"
                                    onClick={() => setStep(step + 1)}
                                    className="ml-auto px-5 py-2 rounded-full bg-pink-600 text-white"
                                >
                                    Next
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    disabled={isStudentLoading}
                                    onClick={methods.handleSubmit(onSubmit)}
                                    className="ml-auto px-5 py-2 rounded-full bg-green-600 text-white flex items-center"
                                >
                                    {isStudentLoading && (
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                    )}
                                    Submit
                                </button>
                            )}
                        </div>
                    </form>
                </FormProvider>
            </div>
        </div>
    );
}