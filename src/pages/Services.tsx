import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
interface Product {
  name: string;
  desc: string;
  imgs: string[]; // Always an array of strings
  features?: string[]; // Optional array of strings
}

interface Category {
  id: string;
  title: string;
  products: Product[];
}
const categories = [
  {
    id: "welding-automation",
    title: "Welding Automation",
    products: [
      {
        name: "Robotic Automation",
        desc: "Robotic automation is at the core of Sharptrax Technologies’ advanced welding solutions. With cutting-edge robotic welding systems, we help industries achieve higher precision, efficiency, and productivity in their manufacturing processes.                                Sharptrax Technologies offers over 20 years of experience as a leader and innovator integrating automation and robotics for the welding industry.",
        features: [
          "Over 20 years of experience as a leader in robotics.",
          "Seamless integration with major industrial robot brands.",
          "Custom end-effector designs for complex weld paths.",
          "Significant reduction in manual labor costs and errors.",
        ],
        imgs: ["/screen5/5ma1.svg", "/ceoimg.svg"],
      },
      {
        name: "Plasma Transferred Arc Welding System",
        desc: " Plasma Transferred Arc (PTA) Welding is a highly advanced and precise welding process designed for hard-facing, cladding, and high-quality metal deposition. At Sharptrax Technologies, we specialize in PTA welding solutions that enhance the durability and performance of industrial components, reducing wear and tear in extreme working conditions.   ",
        features: [
          "Superior wear and tear resistance.",
          "Precise control over deposition rates.",
          "Ideal for industrial cladding applications.",
        ],
        imgs: ["/screen5/5ma3.svg"],
      },
      {
        name: "Welding Rotator",
        desc: "At Sharptrax Technologies, our welding Welding rotators are designed to enhance efficiency, precision, and safety in welding operations. These automated positioning systems help in rotating cylindrical workpieces, ensuring uniform welding and reduced manual effort..",
        imgs: ["/screen5/5ma5.svg"],
      },
      {
        name: "Pull-Through Welding Automation System",
        desc: "At Sharptrax Technologies, our Pull-Through Welding Automation System is designed to enhance productivity, consistency, and precision in welding applications. This advanced system automates the welding process for long and continuous workpieces, ensuring seamless joint quality and reduced manual intervention.",
        imgs: ["/screen5/5ma1.svg"],
      },
      {
        name: "MIG-Welding System",
        desc: "At Sharptrax Technologies, our MIG-Welding System is designed for high-speed, high-quality welding, making it ideal for industrial and manufacturing applications. Using Metal Inert Gas (MIG) welding, this system provides strong, precise, and efficient welds across various materials, including mild steel, stainless steel, and aluminum.",
        imgs: ["/screen5/5ma1.svg"],
      },
      {
        name: "TIG Longitudinal Welding SPM",
        desc: "At Sharptrax Technologies, our TIG-Linear Welding SPM (Special Purpose Machine) is designed for high-precision linear welding applications. This system utilizes Tungsten Inert Gas (TIG) welding, ensuring clean, strong, and defect-free welds with superior control and consistency. It is ideal for industries requiring fine, high-quality welding on long and straight workpieces.",
        imgs: ["/screen5/5ma1.svg"],
      },
      {
        name: "SAW-Submerged Arc Welding",
        desc: "At Sharptrax Technologies, our Submerged Arc Welding (SAW) system is engineered for high-deposition, deep-penetration welding that ensures strong, defect-free welds with minimal spatter. SAW is widely used in industries that require high-strength, heavy-duty welding applications, such as shipbuilding, structural fabrication, and pipeline construction.",
        imgs: ["/screen5/5ma1.svg"],
      },
      {
        name: "Column And Boom",
        desc: "At Sharptrax Technologies, we provide high-performance Column and Boom welding systems, designed to enhance precision, efficiency, and automation in welding processes. Our customized solutions cater to industries requiring high-quality, consistent, and automated welding operations for large structures and complex fabrication.",
        imgs: ["/screen5/5ma1.svg"],
      },
      {
        name: "Port Welding Machine SPM",
        desc: "At Sharptrax Technologies, we specialize in providing customized Port Welding Machine SPM (Special Purpose Machine) designed for high-precision and efficient welding operations in various industries. Our SPM solutions ensure enhanced productivity, accuracy, and automation, reducing manual labor and operational costs.",
        imgs: ["/screen5/5ma1.svg"],
      },
      {
        name: "Head & Tailstock Units",
        desc: "Sharptrax offers very high quality Head & Tailstock Units, which can be used to hold various components for welding, customised solution is also available in Sharptrax.",
        imgs: ["/screen5/5ma1.svg"],
      },
      {
        name: "Hydraulic End Cap Welding SPM",
        desc: "The Hydraulic End Cap Welding SPM is a specialized machine designed for precise and efficient welding of end caps with hydraulic control. It ensures stable positioning, uniform weld quality, and enhanced productivity for industrial applications.",
        imgs: ["/screen5/5ma1.svg"],
      },
    ],
  },
  {
    id: "welding-positioners",
    title: "Welding Positioners",
    products: [
      {
        name: "Welding Positioners",
        desc: "At Sharptrax Technologies, our welding positioners are designed to enhance efficiency, precision, and safety in welding operations. These advanced positioning systems allow welders to rotate and tilt workpieces into the optimal position, ensuring better accessibility, reduced strain, and improved weld quality..",
        imgs: ["/screen5/5ma2.svg"],
      },
      {
        name: "L-Type Positioner",
        desc: "Sharptrax offers extensive range of L type Positioners for manipulating various types of components, Servo/VFD driven for positioning the arms. We also integrate/synchronize with third party Robot to accomplish complete welding process.",
        imgs: ["/screen5/5ma2.svg"],
      },
      {
        name: "Scissor Rollers",
        desc: "Sharptrax offers very high quality Scissor Rollers, which can be used to hold your pipe as a support for your existing machines and can be used as standalone device for pipe support.",
        imgs: ["/screen5/5ma2.svg"],
      },
      {
        name: "Welding Turn Table",
        desc: "We offer excellent quality range of Welding Positioners (Manipulators) that are made from quality raw material. Widely used in various industrial applications, our Positioners position you for maximum flexibility and efficiency. This can also be integrated with Robotic welding automation.",
        imgs: ["/screen5/5ma2.svg"],
      },
    ],
  },
  {
    id: "cnc-cutting",
    title: "Plasma CNC Cutting Machine",
    products: [
      {
        name: "Plasma CNC Machine",
        desc: "At Sharptrax Technologies, we specialize in trading high-quality Plasma CNC Cutting Machines designed for precision cutting, high-speed performance, and superior efficiency. Our Plasma CNC machines are ideal for industries requiring accurate metal cutting solutions with advanced automation.",
        imgs: ["/screen5/5ma4.svg"],
      },
    ],
  },
  {
    id: "accessories",
    title: "Machine Accessories",
    products: [
      {
        name: "Torch Weaving Unit",
        desc: "At Sharptrax Technologies, our Torch Weaving Unit, also known as the Welding Weaving Unit, is designed to enhance welding precision and efficiency by introducing a controlled weaving motion to the welding torch. This advanced system ensures uniform bead formation, improved penetration, and better fusion, making it ideal for critical and high-strength welding applications.",
        imgs: ["/screen5/5ma6.svg"],
      },
      {
        name: "AVC Unit",
        desc: "At Sharptrax Technologies, we manufacture Automatic Voltage Controller (AVC) unit for TIG and Plasma welding process. AVC units are built with LM guideway slides and Servo Motors for precise control height adjustments. AVC units are being used for moving the welding torch vertically, in order to maintain gap between the torch and the job irrespective of its ovality.",
        imgs: ["/screen5/5ma6.svg"],
      },
      {
        name: "Laser Seam Tracking Unit",
        desc: "At Sharptrax Technologies, our Laser Seam Tracking Unit enables tracking of almost all weld joints to avoid manual intervention. It is independently developed, convenient to operate and easy to teach. It features premium optical components compatible with all major robot brands. The unit includes seam finding and tracking functions, a host control unit with an accurate algorithm, and an internal airway design.",
        imgs: ["/screen5/5ma6.svg"],
      },
      {
        name: "Welding Torch",
        desc: "At Sharptrax Technologies, we manufacture high quality PTA (Plasma Transferred Arc) welding Torches for all your hardfacing/cladding applications, we also build customised water cooled PTA OD and ID Torches for high deposition stellite, colmonoy and various alloy powder overlaying.",
        imgs: ["/screen5/5ma6.svg"],
      },
      {
        name: "Cross Slides",
        desc: "At Sharptrax Technologies, we manufacture cross slide Units for Torch manipulation, LM rails and lead screw combination makes the transmission so smooth, Different payloads and various stroke length slides are being made for several applications.",
        imgs: ["/screen5/5ma6.svg"],
      },
    ],
  },
];
export default function Services() {
  console.log("[Services] render", { categories });
  const initialCat = categories[0] || { id: "", products: [] };
  const [activeCat, setActiveCat] = useState(initialCat.id);
  const [activeProd, setActiveProd] = useState(
    initialCat.products[0] || { name: "", desc: "", imgs: [""] },
  );
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const handleCatClick = (cat: any) => {
    setActiveCat(cat.id);
    setActiveProd(cat.products[0]);
    setActiveImgIndex(0); // Reset image index on category change
  };

  const handleProdClick = (prod: any) => {
    setActiveProd(prod);
    setActiveImgIndex(0); // Reset image index on product change
  };

  return (
    <div className="w-full min-h-screen bg-white hero-font pb-20">
      <div className="h-16 md:h-20 w-full bg-white"></div>

      <section className="py-8 md:py-20 px-4 md:px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 uppercase tracking-tight text-gray-900">
          Product and Services
        </h2>

        {/* 1. SLIDING & EXPANDING SECTION (Restored Logic) */}
        <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[450px] mb-12 md:mb-20 overflow-hidden">
          {categories.map((cat) => {
            const isActive = activeCat === cat.id;
            return (
              <motion.div
                key={cat.id}
                animate={{
                  flex: isActive ? 15 : 1,
                  backgroundColor: isActive ? "#ffffff" : "#f3f4f6",
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-[32px] md:rounded-[40px] border border-gray-200 flex flex-col md:flex-row shadow-sm overflow-hidden"
              >
                <div
                  onClick={() => handleCatClick(cat)}
                  className={`relative z-20 flex flex-row md:flex-col items-center justify-between md:justify-center p-5 md:p-6 cursor-pointer transition-all duration-500 bg-inherit ${isActive ? "w-full md:w-[250px] md:border-r" : "w-full h-full"}`}
                >
                  <motion.h3
                    layout
                    className={`font-bold uppercase tracking-widest text-center ${isActive ? "text-base md:text-lg text-red-500" : "text-sm md:text-lg text-gray-400 md:-rotate-90 whitespace-nowrap"}`}
                  >
                    {cat.title}
                  </motion.h3>
                  {isActive && (
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveCat("");
                      }}
                      className="md:absolute md:bottom-8 w-10 h-10 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all shadow-sm"
                    >
                      ←
                    </motion.button>
                  )}
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ x: "-100%", opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: "-100%", opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex-1 bg-white overflow-x-auto flex flex-row items-center gap-4 px-6 py-2 scrollbar-hide"
                    >
                      {cat.products.map((prod, idx) => (
                        <motion.div
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleProdClick(prod);
                          }}
                          className={`min-w-[280px] h-[calc(100%-4px)] p-6 rounded-[35px] border-2 cursor-pointer flex flex-col items-center justify-center text-center transition-all ${activeProd.name === prod.name ? "bg-red-500 border-red-500 text-white shadow-xl scale-[1.02]" : "bg-gray-50 border-transparent text-gray-600 hover:border-red-400"}`}
                        >
                          <div
                            className={`w-full flex-1 rounded-[25px] flex items-center justify-center mb-4 ${activeProd.name === prod.name ? "bg-white/20" : "bg-white shadow-sm"}`}
                          >
                            <img
                              src={prod.imgs[0]}
                              alt={prod.name}
                              className="max-h-[160px] object-contain"
                            />
                          </div>
                          <span className="text-[11px] font-black uppercase tracking-wider">
                            {prod.name}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* 2. PRODUCT DETAILS (UPDATED WITH IMAGE GALLERY & BULLETS) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProd.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-gray-50 p-6 md:p-16 rounded-[40px] border border-gray-100"
          >
            {/* IMAGE AREA WITH THUMBNAILS */}
            <div className="space-y-6">
              <div className="bg-white rounded-[32px] p-6 md:p-12 shadow-inner flex items-center justify-center min-h-[300px] md:min-h-[500px]">
                <motion.img
                  key={activeImgIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  src={activeProd.imgs[activeImgIndex]}
                  alt={activeProd.name}
                  className="max-h-[350px] w-auto object-contain transition-transform duration-700"
                />
              </div>

              {/* Thumbnail Bar - Only shows if more than 1 image */}
              {activeProd.imgs.length > 1 && (
                <div className="flex gap-4 justify-center">
                  {activeProd.imgs.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveImgIndex(idx)}
                      className={`w-20 h-20 rounded-2xl border-2 p-2 cursor-pointer transition-all bg-white ${activeImgIndex === idx ? "border-red-500 scale-110 shadow-md" : "border-transparent opacity-60 hover:opacity-100"}`}
                    >
                      <img src={img} className="w-full h-full object-contain" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* TEXT AREA WITH BULLET POINTS */}
            <div className="flex flex-col h-full">
              <span className="text-red-500 font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase">
                Product Specifications
              </span>
              <h4 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mt-2">
                {activeProd.name}
              </h4>
              <div className="w-16 md:w-20 h-1.5 bg-red-500 rounded-full my-6"></div>

              <p className="text-gray-600 text-sm md:text-lg leading-relaxed mb-8">
                {activeProd.desc}
              </p>

              {/* SECOND DESCRIPTION / FEATURES LIST */}
              {activeProd.features && (
                <div className="bg-white/50 rounded-3xl p-6 md:p-8 border border-gray-200">
                  <h5 className="font-bold text-gray-900 mb-4 uppercase tracking-wide text-sm">
                    Key Capabilities:
                  </h5>
                  <ul className="space-y-3">
                    {activeProd.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-600 text-sm md:text-base"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-auto pt-10">
                <button className="bg-black text-white px-10 py-4 rounded-2xl font-bold hover:bg-red-500 transition-all shadow-lg active:scale-95">
                  Request Technical Data Sheet
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}
