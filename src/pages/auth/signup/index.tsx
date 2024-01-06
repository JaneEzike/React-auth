import { CustomInput } from "@/components/ui/inputs/customInput";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
interface FormData {
  fname: string;
}
const SignUp = () => {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      fname: "",
    },
  });
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          rules={{ required: true }}
          name="fname"
          render={({ field: { onChange, onBlur, value }, formState }) => (
            <CustomInput
              size="sm"
              fullWidth
              LabelText="Name"
              isPassword={false}
              variant="outlined"
              onBlur={onBlur} // notify when input is touched
              onChange={onChange} // send value to hook form
            />
          )}
        />
      </form>
    </div>
  );
};

export default SignUp;
