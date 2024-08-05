import React, { useRef } from "react";
import { Navbar } from "../../components/Navbar";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { SocialIcons } from "../../components/socialIcons";

const validate = (values) => {
  const errors = {};
  if (!values.from_name) {
    errors.from_name = "Required";
  }
  if (!values.message) {
    errors.message = "Required";
  }

  if (!values.from_email) {
    errors.from_email = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.from_email)
  ) {
    errors.from_email = "Invalid email address";
  }

  return errors;
};

export const Contact = () => {
  const formRef = useRef();
  const formik = useFormik({
    initialValues: {
      from_name: "",
      message: "",
      from_email: "",
    },
    validate,
    enableReinitialize:true,
    onSubmit: (values, helper) => {
      emailjs
        .sendForm("service_zqngjwf", "template_xhq7sqy", formRef.current, {
          publicKey: "aTYEAdL_AOlA3U0NS",
        })
        .then(
          () => {
            toast("Message Successfully Forwarded", {
              autoClose: 5000,
              type: "success",
              position: "top-right",
            });
            helper.resetForm()
            formRef.current.reset();
          },
          (error) => {
            toast("Something Went Wrong, Please Try Again", {
              autoClose: 5000,
              type: "error",
              position: "top-right",
            });
          }
        );
    },
  });
  return (
   <>
    <div className="container max-w-custom mx-auto h-full">
      <Navbar />
      <div
        className="max-w-[29.75rem] px-3 md:px-0 flex flex-col justify-center items-center mx-auto "
        style={{ height: "calc(100vh - 188px)" }}
      >
        <h2 className="text-[#D5D5D5] pb-[1rem] text-center font-bold leading-[120%] text-[2rem]">
          Get in touch
        </h2>
        <p className="text-[#D5D5D5] text-center text-[1.125rem] font-normal leading-[150%]">
          Let us know how we can help
        </p>
        <form
          ref={formRef}
          onSubmit={formik.handleSubmit}
          className="w-full pt-[1rem]"
        >
          <div className="flex flex-col py-[0.5rem] gap-1">
            <label
              className="text-[#C4C4C4] text-[0.875rem]  font-normal leading-[150%]"
              htmlFor="Name"
            >
              Name
            </label>
            <input
              id="Name"
              placeholder="Your full name"
              className="h-[2.625rem] p-3"
              name="from_name"
              autoComplete="off"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.from_name ? (
              <div className="text-red-700">{formik.errors.from_name}</div>
            ) : null}
          </div>
          <div className="flex flex-col py-[0.5rem]">
            <label
              className="text-[#C4C4C4] text-[0.875rem] font-normal leading-[150%]"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              name="from_email"
              autoComplete="off"
              className="h-[2.625rem]  p-3"
              type="email"
              placeholder="me@company.com"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.from_email ? (
              <div className="text-red-700">{formik.errors.from_email}</div>
            ) : null}
          </div>
          <div className="flex flex-col py-[0.5rem]">
            <label
              className="text-[#C4C4C4] text-[0.875rem] font-normal leading-[150%]"
              htmlFor="email"
            >
              Message
            </label>
            <textarea
              id="message"
              autoComplete="off"
              placeholder="Your message..."
              name="message"
              className="h-[6.25rem]  p-3"
              onChange={formik.handleChange}
              value={formik.values.message}
            />
            {formik.errors.message ? (
              <div className="text-red-700">{formik.errors.message}</div>
            ) : null}
          </div>
          <button
            disabled={formik.isSubmitting}
            className="w-full bg-black text-white disabled:cursor-not-allowed disabled:text-white/85  text-[0.75rem] font-medium leading-[140%] py-3 mt-[0.5rem]"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    <SocialIcons/>
    </>
  );
};
