import { motion } from "framer-motion";
import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import { fadeInUp, routeAnimation, stagger } from "../animations";
import { ServiceCard } from "../components/ServiceCard";
import { services } from "../data";
import Head from "next/head";

const index = ({ endpoint }) => {
  console.log("endpoints", endpoint);
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <Head>
        <title>Web Developer | portofolio | Sujackson</title>
      </Head>
      <h5 className="my-5 font-medium">
        I am enthusiastic about how to improve human life with software
        engineering and IoT skill. I am able to work under pressure and adhere
        to strict deadline for company success
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              // initial="initial"
              // animate="animate"
              key={service.title}
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default index;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
  // const data = await res.json();
  // console.log(process.env.VERCEL_URL, "inini");

  // console.log("SE", data);
  return {
    props: {
      endpoint: process.env.VERCEL_URL,
    },
  };
};

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
