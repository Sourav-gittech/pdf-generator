import { useDispatch, useSelector } from "react-redux";

import StudentHeader from "../components/all-student/StudentHeader";
import StudentCard from "../components/all-student/StudentCard";
import { useEffect } from "react";
import { allStudentSlice } from "../redux/slice/studentSlice";
import { Loader2 } from "lucide-react";

export default function StudentList() {

    const dispatch = useDispatch(),
        { isStudentLoading, studentData, hasStudentError } = useSelector(state => state.student);

    useEffect(() => {
        dispatch(allStudentSlice())
            .then(res => {
                // console.log('Response for fetching all available data', res)
            })
            .catch(err => {
                console.log('Error occured', err);
            })
    }, [dispatch]);

    // console.log("All availble data", studentData.data);

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-700 to-indigo-900 p-10">
            <div className="max-w-6xl mx-auto">
                <StudentHeader />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <>
                        {isStudentLoading ? <>
                            <span></span>
                            <Loader2 className="animate-spin my-10 w-12 h-12 mx-auto text-white" />
                        </> :
                            studentData?.data?.length > 0 ? studentData?.data?.map(student => (
                                <StudentCard key={student?._id} student={student} />
                            )) :
                                <>
                                    <span></span>
                                    <p className="text-center mx-auto my-5 text-white">No data available</p>
                                </>}
                    </>
                </div>
            </div>
        </div>
    );
}