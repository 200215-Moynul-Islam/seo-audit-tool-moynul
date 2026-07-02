import type { AuditReport } from "../types/audit";

export const mockAudit: AuditReport = {
  summary: {
    score: 84,
    totalChecks: 10,
    passed: 6,
    warnings: 3,
    failed: 1,
  },

  performance: {
    responseTime: 720,
    pageSize: "1.6 MB",
    requests: 42,
    cssFiles: 4,
    jsFiles: 8,
    images: 18,
  },

  sections: [
    {
      id: "metadata",
      title: "Metadata",
      results: [
        {
          id: "title",
          title: "Page Title",
          status: "pass",
          description: "Title tag is present.",
          affectedElement: "<title>",
          recommendation: "No action required.",
        },
        {
          id: "meta-description",
          title: "Meta Description",
          status: "warning",
          description: "Meta description is shorter than recommended.",
          affectedElement: "<meta name='description'>",
          recommendation:
            "Increase the description length to around 150–160 characters.",
        },
      ],
    },

    {
      id: "images",
      title: "Images",
      results: [
        {
          id: "image-alt",
          title: "Image Alt Attributes",
          status: "fail",
          description: "Several images are missing alt attributes.",
          affectedElement: "<img>",
          recommendation:
            "Provide descriptive alt text for all meaningful images.",
        },
      ],
    },

    {
      id: "headings",
      title: "Heading Structure",
      results: [
        {
          id: "heading-order",
          title: "Heading Hierarchy",
          status: "warning",
          description: "Heading levels skip from H1 to H3.",
          affectedElement: "<h3>",
          recommendation: "Maintain a logical heading hierarchy.",
        },
      ],
    },
  ],
};
