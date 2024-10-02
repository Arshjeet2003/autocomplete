const completionSpec: Fig.Spec = {
  name: "supplychain",
  description:
    "AWS Supply Chain is a cloud-based application that works with your enterprise resource planning (ERP) and supply chain management systems. Using AWS Supply Chain, you can connect and extract your inventory, supply, and demand related data from existing ERP or supply chain systems into a single data model.  The AWS Supply Chain API supports configuration data import for Supply Planning.  All AWS Supply chain API operations are Amazon-authenticated and certificate-signed. They not only require the use of the AWS SDK, but also allow for the exclusive use of AWS Identity and Access Management users and roles to help facilitate access, trust, and permission policies",
  subcommands: [
    {
      name: "create-bill-of-materials-import-job",
      description:
        "CreateBillOfMaterialsImportJob creates an import job for the Product Bill Of Materials (BOM) entity. For information on the product_bom entity, see the AWS Supply Chain User Guide. The CSV file must be located in an Amazon S3 location accessible to AWS Supply Chain. It is recommended to use the same Amazon S3 bucket created during your AWS Supply Chain instance creation",
      options: [
        {
          name: "--instance-id",
          description: "The AWS Supply Chain instance identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3uri",
          description:
            "The S3 URI of the CSV file to be imported. The bucket must grant permissions for AWS Supply Chain to read the file",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "An idempotency token ensures the API request is only completed no more than once. This way, retrying the request will not trigger the operation multiple times. A client token is a unique, case-sensitive string of 33 to 128 ASCII characters. To make an idempotent API request, specify a client token in the request. You should not reuse the same client token for other requests. If you retry a successful request with the same client token, the request will succeed with no further actions being taken, and you will receive the same API response as the original successful request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-data-integration-flow",
      description:
        "Create DataIntegrationFlow to map one or more different sources to one target using the SQL transformation query",
      options: [
        {
          name: "--instance-id",
          description:
            "The Amazon Web Services Supply Chain instance identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "Name of the DataIntegrationFlow",
          args: {
            name: "string",
          },
        },
        {
          name: "--sources",
          description: "The source configurations for DataIntegrationFlow",
          args: {
            name: "list",
          },
        },
        {
          name: "--transformation",
          description:
            "The transformation configurations for DataIntegrationFlow",
          args: {
            name: "structure",
          },
        },
        {
          name: "--target",
          description: "The target configurations for DataIntegrationFlow",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "The tags of the DataIntegrationFlow to be created",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-data-lake-dataset",
      description: "Create a data lake dataset",
      options: [
        {
          name: "--instance-id",
          description:
            "The Amazon Web Services Supply Chain instance identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The name space of the dataset.    asc - For information on the Amazon Web Services Supply Chain supported datasets see https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html.    default - For datasets with custom user-defined schemas",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the dataset. For asc name space, the name must be one of the supported data entities under https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html",
          args: {
            name: "string",
          },
        },
        {
          name: "--schema",
          description:
            "The custom schema of the data lake dataset and is only required when the name space is default",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "The description of the dataset",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags of the dataset",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-data-integration-flow",
      description: "Delete the DataIntegrationFlow",
      options: [
        {
          name: "--instance-id",
          description:
            "The Amazon Web Services Supply Chain instance identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the DataIntegrationFlow to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-data-lake-dataset",
      description: "Delete a data lake dataset",
      options: [
        {
          name: "--instance-id",
          description: "The AWS Supply Chain instance identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace of the dataset. The available values are:   asc: for  AWS Supply Chain supported datasets .   default: for datasets with custom user-defined schemas",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the dataset. If the namespace is asc, the name must be one of the supported data entities",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-bill-of-materials-import-job",
      description: "Get status and details of a BillOfMaterialsImportJob",
      options: [
        {
          name: "--instance-id",
          description: "The AWS Supply Chain instance identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The BillOfMaterialsImportJob identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-data-integration-flow",
      description: "View the DataIntegrationFlow details",
      options: [
        {
          name: "--instance-id",
          description:
            "The Amazon Web Services Supply Chain instance identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the DataIntegrationFlow created",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-data-lake-dataset",
      description: "Get a data lake dataset",
      options: [
        {
          name: "--instance-id",
          description:
            "The Amazon Web Services Supply Chain instance identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The name space of the dataset. The available values are:    asc - For information on the Amazon Web Services Supply Chain supported datasets see https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html.    default - For datasets with custom user-defined schemas",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the dataset. For asc name space, the name must be one of the supported data entities under https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-data-integration-flows",
      description: "Lists all the DataIntegrationFlows in a paginated way",
      options: [
        {
          name: "--instance-id",
          description:
            "The Amazon Web Services Supply Chain instance identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token to fetch the next page of the DataIntegrationFlows",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specify the maximum number of DataIntegrationFlows to fetch in one paginated request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-data-lake-datasets",
      description:
        "List the data lake datasets for a specific instance and name space",
      options: [
        {
          name: "--instance-id",
          description:
            "The Amazon Web Services Supply Chain instance identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace of the dataset. The available values are:   asc: for  AWS Supply Chain supported datasets .   default: for datasets with custom user-defined schemas",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "The pagination token to fetch next page of datasets",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The max number of datasets to fetch in this paginated request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-tags-for-resource",
      description:
        "List all the tags for an Amazon Web ServicesSupply Chain resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Web Services Supply chain resource ARN that needs tags to be listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "send-data-integration-event",
      description:
        "Send the transactional data payload for the event with real-time data for analysis or monitoring. The real-time data events are stored in an Amazon Web Services service before being processed and stored in data lake. New data events are synced with data lake at 5 PM GMT everyday. The updated transactional data is available in data lake after ingestion",
      options: [
        {
          name: "--instance-id",
          description: "The AWS Supply Chain instance identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-type",
          description: "The data event type",
          args: {
            name: "string",
          },
        },
        {
          name: "--data",
          description:
            "The data payload of the event. For more information on the data schema to use, see Data entities supported in AWS Supply Chain",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-group-id",
          description:
            "Event identifier (for example, orderId for InboundOrder) used for data sharing or partitioning",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-timestamp",
          description: "The event timestamp (in epoch seconds)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--client-token",
          description: "The idempotent client token",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "tag-resource",
      description:
        "Create tags for an Amazon Web Services Supply chain resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Web Services Supply chain resource ARN that needs to be tagged",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags of the Amazon Web Services Supply chain resource to be created",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "untag-resource",
      description:
        "Delete tags for an Amazon Web Services Supply chain resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Web Services Supply chain resource ARN that needs to be untagged",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "The list of tag keys to be deleted for an Amazon Web Services Supply Chain resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-data-integration-flow",
      description: "Update the DataIntegrationFlow",
      options: [
        {
          name: "--instance-id",
          description:
            "The Amazon Web Services Supply Chain instance identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the DataIntegrationFlow to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--sources",
          description:
            "The new source configurations for the DataIntegrationFlow",
          args: {
            name: "list",
          },
        },
        {
          name: "--transformation",
          description:
            "The new transformation configurations for the DataIntegrationFlow",
          args: {
            name: "structure",
          },
        },
        {
          name: "--target",
          description:
            "The new target configurations for the DataIntegrationFlow",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-data-lake-dataset",
      description: "Update a data lake dataset",
      options: [
        {
          name: "--instance-id",
          description: "The Amazon Web Services Chain instance identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The name space of the dataset. The available values are:    asc - For information on the Amazon Web Services Supply Chain supported datasets see https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html.    default - For datasets with custom user-defined schemas",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the dataset. For asc name space, the name must be one of the supported data entities under https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The updated description of the data lake dataset",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
  ],
};
export default completionSpec;
