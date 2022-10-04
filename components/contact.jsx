import React, { useState } from "react";

export default function ContactUs() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    //   Form validation
    const [errors, setErrors] = useState({});

    //   Setting button text
    const [buttonText, setButtonText] = useState("Lähetä");

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;

        if (fullname.length <= 0) {
            tempErrors["fullname"] = true;
            isValid = false;
        }
        if (email.length <= 0) {
            tempErrors["email"] = true;
            isValid = false;
        }
        if (subject.length <= 0) {
            tempErrors["subject"] = true;
            isValid = false;
        }
        if (message.length <= 0) {
            tempErrors["message"] = true;
            isValid = false;
        }

        setErrors({ ...tempErrors });
        console.log("errors", errors);
        return isValid;
    };

    //   const [form, setForm] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let isValidForm = handleValidation();

        if (isValidForm) {
            setButtonText("Lähetetään");
            const res = await fetch("/api/sendgrid", {
                body: JSON.stringify({
                    email: email,
                    fullname: fullname,
                    subject: subject,
                    message: message,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });

            const { error } = await res.json();
            if (error) {
                console.log(error);
                setShowSuccessMessage(false);
                setShowFailureMessage(true);
                setButtonText("Send");

                // Reset form fields
                setFullname("");
                setEmail("");
                setMessage("");
                setSubject("");
                return;
            }
            setShowSuccessMessage(true);
            setShowFailureMessage(false);
            setButtonText("Lähetetty");
            // Reset form fields
            setFullname("");
            setEmail("");
            setMessage("");
            setSubject("");
        }
        console.log(fullname, email, subject, message);
    };
    return (
        <>
            <header className="p-4 relative grid grid-cols-1 md:grid-cols-2 sm:py-44 py-24 lg:px-40 bg-darkPurple">

                <div className="md:h-36 md:w-36 h-24 w-24 rounded-full bg-purple-400 absolute blur-3xl bottom-0 md:visible md:translate-x-44 md:-translate-y-32"></div>
                <div className="h-36 w-36 rounded-full bg-purple-400 absolute blur-3xl"></div>
                <div className="h-20 w-20 rounded-full bg-purple-400 absolute blur-3xl translate-y-44 right-0"></div>
                <div className="h-24 w-24 rounded-full bg-purple-400 absolute blur-3xl bottom-0 right-0"></div>

                <div className="mx-auto mb-10 md:mt-20">
                    <h1 className="text-7xl font-bold mt-4 text-white font-AmaticSC">
                        Ota yhteyttä rohkeasti, koski asiasi mitä tahansa!
                    </h1>
                    <p className="text-lg text-white mt-4 font-light">
                        Otamme vastaan niin risut kuin ruusutkin. Kysymyksiä voi lähettää myös kissa adoptoinneista, sekä ilmottautua tapahtumiin!
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-purple-400"
                >
                    <h1 className="text-2xl font-bold text-darkPurple">
                        Lähetä meille viesti
                    </h1>

                    <label
                        htmlFor="fullname"
                        className="text-darkPurple font-bold mt-8"
                    >
                        Full name
                    </label>
                    <input
                        type="text"
                        value={fullname}
                        onChange={(e) => {
                            setFullname(e.target.value);
                        }}
                        name="fullname"
                        className="bg-purple-50 rounded-lg font-medium py-2 mt-2 pl-4 focus:outline-none text-gray-900"
                    />
                    {errors?.fullname && (
                        <p className="text-red-500">Fullname cannot be empty.</p>
                    )}

                    <label
                        htmlFor="email"
                        className="text-darkPurple font-bold mt-4"
                    >
                        E-mail
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        className="bg-purple-50 rounded-lg font-medium py-2 mt-2 pl-4 focus:outline-none text-gray-900"
                    />
                    {errors?.email && (
                        <p className="text-red-500">Email cannot be empty.</p>
                    )}

                    <label
                        htmlFor="subject"
                        className="text-darkPurple font-bold mt-8"
                    >
                        Subject
                    </label>
                    <input
                        type="text"
                        name="subject"
                        value={subject}
                        onChange={(e) => {
                            setSubject(e.target.value);
                        }}
                        className="bg-purple-50 rounded-lg font-medium py-2 mt-2 pl-4 focus:outline-none text-gray-900"
                    />
                    {errors?.subject && (
                        <p className="text-red-500">Subject cannot be empty.</p>
                    )}
                    <label
                        htmlFor="message"
                        className="text-darkPurple font-bold mt-8"
                    >
                        Message
                    </label>
                    <textarea
                        name="message"
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                        className="bg-purple-50 rounded-lg font-medium py-2 mt-2 pl-4 focus:outline-none text-gray-900"
                    ></textarea>
                    {errors?.message && (
                        <p className="text-red-500">Message body cannot be empty.</p>
                    )}
                    <div className="flex flex-row items-center justify-start">
                        <button
                            type="submit"
                            className="px-10 mt-8 py-2 bg-darkPurple text-gray-50 font-light rounded-lg text-lg flex flex-row items-center"
                        >
                            {buttonText}

                        </button>
                    </div>
                    <div className="text-left">
                        {showSuccessMessage && (
                            <p className="text-purple-900 font-semibold text-sm my-2">
                                Kiitos! Vastaamme viestiisi mahdollisimman pian.
                            </p>
                        )}
                        {showFailureMessage && (
                            <p className="text-purple-900">
                                hups! Jotakin meni pieleen.
                            </p>
                        )}
                    </div>
                </form>
            </header>

        </>
    );
}