import { useFormContext } from "react-hook-form";

export default function AddressDetails() {
    const { register } = useFormContext();

    return (
        <>
            <h2 className="text-xl font-bold mb-4">Address Details</h2>

            <input {...register("address.street")} placeholder="Street" className="input" />
            <input {...register("address.city")} placeholder="City" className="input" />
            <input {...register("address.full_address")} placeholder="Full Address" className="input" />
            <input {...register("address.country")} placeholder="Country" className="input" />
            <input {...register("address.pin")} placeholder="PIN Code" className="input" />
        </>
    );
}