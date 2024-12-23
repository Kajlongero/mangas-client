import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Props = {
  title: string;
};

export const AccordionComponent = ({ title }: Props) => {
  return (
    <Accordion
      sx={{
        backgroundColor: "transparent",
        color: "white",
        border: "1px solid #373737",
        borderRadius: "0.75rem",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className="text-white" />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {title}
      </AccordionSummary>
      <AccordionDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </AccordionDetails>
    </Accordion>
  );
};
