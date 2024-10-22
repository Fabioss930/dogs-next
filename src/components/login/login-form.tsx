"use client";

import login from "@/actions/login";
import { useFormState, useFormStatus } from "react-dom";
import Button from "../forms/button";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import { useEffect } from "react";
import Link from "next/link";
import styles from "./login-form.module.css";

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending}>{pending ? "Entrando..." : "Entrar"}</Button>
  );
}

export default function LoginForm() {
  const [state, action] = useFormState(login, {
    ok: false,
    error: "",
    data: null,
  });

  useEffect(() => {
    if (state.ok) window.location.href = "/conta";
  }, [state.ok]);
  return (
    <>
      <form action={action} className={styles.form}>
        <Input label="usuário" name="username" type="text" />
        <Input label="senha" name="password" type="password" />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
      <Link className={styles.perdeu} href="/login/perdeu">
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastra-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className="button" href="/login/criar">
          Cadastro
        </Link>
      </div>
    </>
  );
}
