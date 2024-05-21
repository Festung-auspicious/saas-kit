"use client";
import createUser from "@/actions/auth";
import Button from "@/shared/component/Button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
export default function Registration() {
  const [state, formAction] = useFormState(createUser, null);
  useEffect(() => {
    if (state?.server) {
      toast.error(state.server);
    }
  }, [state]);
  return (
    <div className="flex h-screen p-2 lg:p-0 items-center justify-center bg-base-200">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form
          action={formAction}
          className="card-body flex flex-col gap-4 p-5 justify-center items-center"
        >
          <div className="avatar form-control">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <Image width={100} height={100} alt="logo" src="/Designer.png" />
            </div>
          </div>
          <div className="form-control w-full">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                name="name"
                type="username"
                className="grow w-full"
                placeholder="Username"
              />
            </label>
            {state?.errors?.name && (
              <span className="text-red-500">{state.errors.name}</span>
            )}
          </div>
          <div className="form-control w-full">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                name="email"
                type="email"
                className="grow"
                placeholder="Email"
              />
            </label>
            {state?.errors?.email && (
              <span className="text-red-500">{state.errors.email}</span>
            )}
          </div>
          <div className="form-control w-full">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="grow"
              />
            </label>
            {state?.errors?.password && (
              <span className="text-red-500">{state.errors.password}</span>
            )}
          </div>
          <Button variant="primary" className="btn-active w-full">
            Sign up
          </Button>
        </form>
      </div>
    </div>
  );
}
