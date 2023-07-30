import FormHeader from "@/components/FormHeader";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='w-[500px]'>
            <FormHeader />
            {children}
        </div>
    );
}
