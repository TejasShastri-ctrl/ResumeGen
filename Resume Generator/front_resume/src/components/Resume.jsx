import React, { useRef } from "react";
import "./Resume.css";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";
import { useReactToPrint } from "react-to-print";
import RTemplate1 from "../ResTemplates/RTemplate1";
import RTemplate2 from "../ResTemplates/RTemplate2";

const Resume = ({ data, template }) => {
  const resumeRef = useRef(null);

  //! 55mb ->70kb
  // const handleDownloadPdf = () => {
  //   toPng(resumeRef.current, {
  //     quality: 0.95,
  //     scale: 2,
  //     pixelRatio: 1.5,
  //     width: resumeRef.current.offsetWidth * 2,
  //     height: resumeRef.current.offsetHeight * 2,
  //     filter: (node) => {
  
  //       const exclusionClasses = ['exclude-from-pdf'];
  //       return !node.classList || !exclusionClasses.some(classname => 
  //         node.classList.contains(classname)
  //       );
  //     }
  //   })
  //   .then((dataUrl) => {
  //     const pdf = new jsPDF({
  //       orientation: "portrait",
  //       unit: "mm",
  //       format: "a4",
  //       compress: true // Enable compression
  //     });
  //     const imgProps = pdf.getImageProperties(dataUrl);
  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  //     pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight, '', 'FAST');
  //     pdf.save(`${data.personalInformation.fullName}.pdf`);
  //   })
  //   .catch((err) => {
  //     console.error("Error generating PDF", err);
  //   });
  // };

  const handleDownloadPdf = () => {
    toPng(resumeRef.current, { quality: 1.0, pixelRatio: 2 }) // Increase pixel ratio for better resolution
      .then((dataUrl) => {
        const pdf = new jsPDF("p", "mm", "a4");
        const imgProps = pdf.getImageProperties(dataUrl);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  
        pdf.addImage(dataUrl, "PNG", 10, 10, pdfWidth - 20, pdfHeight - 20);
        pdf.save(`${data.personalInformation.fullName}.pdf`);
      })
      .catch((err) => {
        console.error("Error generating PDF", err);
      });
  };
  
  

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: `${data.personalInformation.fullName}-Resume`,
  });

  return (
    <div className="flex flex-col items-center p-6">
      {/* Buttons for Download & Print */}
      <div className="mb-4 space-x-4">
        <button onClick={handleDownloadPdf} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Download PDF
        </button>
        <button onClick={handlePrint} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Print Resume
        </button>
      </div>

      {/* Resume Template */}
      <div ref={resumeRef} className="w-full bg-white shadow-lg p-6 rounded">
        {template === "RTemplate1" && <RTemplate1 data={data} />}
        {template === "RTemplate2" && <RTemplate2 data={data} />}
      </div>
    </div>
  );
};

export default Resume;
