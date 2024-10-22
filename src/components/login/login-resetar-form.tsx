"use client";

import { useFormState, useFormStatus } from "react-dom";
import Button from "../forms/button";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import { useEffect } from "react";

import styles from "./login-form.module.css";

import passwordReset from "@/actions/password-reset";

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending}>
      {pending ? "Resetando..." : "Resetar senha"}
    </Button>
  );
}

export default function LoginResetarForm({
  keyToken,
  login,
}: {
  keyToken: string;
  login: string;
}) {
  const [state, action] = useFormState(passwordReset, {
    ok: false,
    error: "",
    data: null,
  });

  return (
    <form action={action} className={styles.form}>
      <Input label="Nova senha" name="password" type="password" />
      <input type="hidden" name="login" value={login} />
      <input type="hidden" name="key" value={keyToken} />

      <ErrorMessage error={state.error} />
      <FormButton />
    </form>
  );
}
