import { useFormContext } from "react-hook-form";

export default function PersonalDetails() {
    const { register } = useFormContext();

    return (
        <>
            <h2 className="text-xl font-bold mb-4">Personal Details</h2>

            <input {...register("first_name")} placeholder="First Name" className="input" />
            <input {...register("last_name")} placeholder="Last Name" className="input" />
            <input {...register("email")} placeholder="Email" className="input" />
            <input {...register("phone")} placeholder="Phone" className="input" />
        </>
    );
}