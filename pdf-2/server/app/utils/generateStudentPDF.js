const PDFDocument = require("pdfkit");

const generateStudentPDF = (student, res) => {

    const doc = new PDFDocument({ size: "A4", margin: 50 });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `inline; filename=${student.first_name}${Date.now()}.pdf`);

    doc.pipe(res);

    doc.fontSize(20).text("Student Details", { align: "center" });
    doc.moveDown(2);

    doc.fontSize(14).text("Personal Details");
    doc.fontSize(12);
    doc.text(`Name: ${student.first_name} ${student.last_name}`);
    doc.text(`Email: ${student.email}`);
    doc.text(`Phone: ${student.phone}`);

    doc.moveDown();
    doc.fontSize(14).text("Family Details");
    doc.fontSize(12);
    doc.text(`Father: ${student.family_details.father_name}`);
    doc.text(`Mother: ${student.family_details.mother_name}`);
    doc.text(`Guardian: ${student.family_details.local_gurdian_name}`);
    doc.text(`Guardian Phone: ${student.family_details.gurdian_contact_no}`);

    doc.moveDown();
    doc.fontSize(14).text("Address Details");
    doc.fontSize(12);
    doc.text(student.address.full_address);
    doc.text(`${student.address.city}, ${student.address.country}`);
    doc.text(`PIN: ${student.address.pin}`);

    doc.end();
};

module.exports = generateStudentPDF;