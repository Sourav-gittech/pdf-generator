import { Mail, MapPinHouse, Phone, Trash2 } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { allStudentSlice, deleteStudentSlice } from '../../redux/slice/studentSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function StudentCard({ student }) {

    const dispatch = useDispatch(),
        navigate = useNavigate();

    const deleteStudent = studentId => {
        dispatch(deleteStudentSlice(studentId))
            .then(res => {
                // console.log('Response for deleting data', res);

                if (res.meta.requestStatus == "fulfilled") {
                    toast(`Student deleted successfully`);
                    dispatch(allStudentSlice());
                    navigate('/');
                }
                else {
                    toast("Something went wrong");
                }
            })
            .catch(err => {
                console.log('Error occured', err);
            })
    }

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-[1.02] transition">

            <span className='flex justify-between'>
                {/* Avatar */}
                <div className="w-14 h-14 rounded-full bg-pink-600 text-white 
                      flex items-center justify-center font-bold text-xl mb-4">
                    {student?.first_name?.charAt(0)}
                </div>
                <button onClick={() => deleteStudent(student?._id)}> <Trash2 className='text-red-500 w-4 h-4 mb-5 cursor-pointer' /></button>
            </span>

            {/* Name */}
            <h2 className="text-lg font-bold text-gray-800">
                {student?.first_name} {student?.last_name}
            </h2>

            {/* Info */}
            <div className="text-sm text-gray-600 mt-2 space-y-1">
                <p><Mail className='inline w-4 h-4 mb-0.5 mr-1' />{student?.email}</p>
                <p><Phone className='inline w-4 h-4 mb-0.5 mr-1' />{student?.phone}</p>
                <p><MapPinHouse className='inline w-4 h-4 mb-0.5 mr-1' />{student?.address?.city}, {student?.address?.country}</p>
            </div>

            {/* Actions */}
            {/* <div className="flex justify-between mt-4">
                <button className="text-pink-600 font-semibold hover:underline">
                    View
                </button>
                <button className="text-indigo-600 font-semibold hover:underline">
                    Edit
                </button>
                <button className="text-red-500 font-semibold hover:underline">
                    Delete
                </button>
            </div> */}
        </div>
    );
}