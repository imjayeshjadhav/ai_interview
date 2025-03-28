"use client";
import  Image  from "next/image";
import { z } from "zod";
import Link from "next/link";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

const AuthForm = () => {
  return (
    <div className="card-border lg:min-w-[566px] ">
        <div className="flex flex-col gap-6 card py-14 px-10 ">
            <div className="flex flex-row gap-2 justify-center">
                <Image src="/logo.svg" alt="" height={32} width={38} />
            </div>
        </div>
      
    </div>
  )
}

export default AuthForm
