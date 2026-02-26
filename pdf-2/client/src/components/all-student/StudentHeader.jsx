import { Link } from "react-router-dom";

export default function StudentHeader() {
    return (
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-white tracking-wide">
                All students
            </h1>

            <Link to="/add-student" className="px-6 py-2 bg-pink-600 text-white rounded-full font-semibold hover:shadow-lg transition">
                Add Student
            </Link>
        </div>
    );
}