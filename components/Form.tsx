import React from "react";
import {
    FormControl,
    FormField,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const CustomForm = ({ type, form }: { type: "password" | "email", form: any }) => {

    return (
        <FormField
        control={form.control}
        name={`${type}`}
        render={({ field }) => (
            <div className="form-item">
                <FormLabel className="form-label">{type === "email"? "Email" : "Password"}</FormLabel>
                    <div className="flex w-full flex-col">
                        <FormControl>
                            <Input
                                placeholder={`Enter your ${type === "email"? "Email" : "Password"}`}
                                className="input-class"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage className="form-message mt-2" />
                    </div>
            </div>
        )}
        />
    );
};

export default CustomForm;
