import { useFormContext } from "react-hook-form";

export default function FamilyDetails() {
    const { register } = useFormContext();

    return (
        <>
            <h2 className="text-xl font-bold mb-4">Family Details</h2>

            <input {...register("family_details.father_name")} placeholder="Father Name" className="input" />
            <input {...register("family_details.mother_name")} placeholder="Mother Name" className="input" />
            <input {...register("family_details.local_gurdian_name")} placeholder="Local Guardian" className="input" />
            <input {...register("family_details.gurdian_contact_no")} placeholder="Guardian Phone" className="input" />
        </>
    );
}