import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Int "mo:core/Int";
import Time "mo:core/Time";
import Order "mo:core/Order";
import MixinStorage "blob-storage/Mixin";



actor {
  include MixinStorage();

  // Enumerations (Enums)
  public type ShipmentStatus = { #pending; #inTransit; #delivered; #cancelled };
  public type TemperatureRequirement = { #frozen; #refrigerated; #ambient };

  // Custom Types & Type Aliases
  public type Address = {
    street : Text;
    city : Text;
    state : Text;
    zip : Text;
  };

  public type ContactInfo = {
    name : Text;
    phone : Text;
    email : Text;
  };

  public type Dimensions = {
    length : Float;
    width : Float;
    height : Float;
    weight : Float;
  };

  public type QuoteRequest = {
    id : Nat;
    origin : Address;
    destination : Address;
    contact : ContactInfo;
    cargoDetails : Text;
    dimensions : Dimensions;
    temperatureRequirement : TemperatureRequirement;
    submittedAt : Int;
  };

  public type ShipmentRecord = {
    id : Nat;
    pickupLocation : Address;
    deliveryLocation : Address;
    status : ShipmentStatus;
    temperatureLogs : [(Int, Float)];
    createdAt : Int;
  };

  public type ComplianceDocument = {
    id : Nat;
    title : Text;
    content : Text;
    documentType : { #policy; #certificate; #guideline };
    createdAt : Int;
    lastUpdated : Int;
  };

  public type IndustryResource = {
    id : Nat;
    title : Text;
    resourceType : { #article; #regulation; #caseStudy };
    content : Text;
    createdAt : Int;
  };

  public type FormSubmission = {
    name : Text;
    email : Text;
    phone : Text;
    pickupLocation : Text;
    deliveryLocation : Text;
    message : Text;
    permissionGranted : Bool;
    timestamp : Int;
  };

  // Compare module for FormSubmission
  module FormSubmission {
    public func compareByTimestamp(a : FormSubmission, b : FormSubmission) : Order.Order {
      Int.compare(a.timestamp, b.timestamp);
    };
  };

  public type PrivacyPolicy = {
    title : Text;
    content : Text;
    lastUpdated : Int;
  };

  public type ResourcesContent = {
    content : Text;
    lastUpdated : Int;
  };

  // Storage Maps
  let quotesMap = Map.empty<Nat, QuoteRequest>();
  let shipmentsMap = Map.empty<Nat, ShipmentRecord>();
  let complianceMap = Map.empty<Nat, ComplianceDocument>();
  let resourcesMap = Map.empty<Nat, IndustryResource>();
  let submissionsMap = Map.empty<Int, FormSubmission>();

  // Resources Content (var to allow future updates)
  var resourcesContent : ResourcesContent = {
    content =
      "
The Cold Chain Resource Center
Precision in Motion, Safety in Every Degree. At Supreme Trucking Group, we understand that in 2026, refrigerated LTL is no longer just about moving pallets—it`s about moving data. With the FSMA 204 traceability standards transforming the industry, our mission is to provide more than just a temperature-controlled trailer; we provide a shield of compliance for your brand. From real-time temp-log transparency to expert handling of the Food Traceability List (FTL), Supreme Trucking Group is the partner you need to navigate the most complex regulatory era in logistics history. We don`t just deliver your cargo; we deliver the peace of mind that your records are audit-ready and your product is pristine.

________________________________________

2026 Compliance Hub

Featured Article: The Shipper`s 2026 FSMA 204 Readiness Checklist

The FDA`s Section 204 is now active. While enforcement timelines have been extended to 2028, major retailers are already requiring these standards today. Use this checklist to ensure your brand isn`t left behind.

1. Know Your FTL Exposure
• [ ] List Audit: Are your products on the FDA`s Food Traceability List? (Includes soft cheeses, nut butters, leafy greens, and deli salads).
• [ ] Ingredient Tracking: If your product contains an FTL item as an ingredient, the entire shipment is subject to the rule.

2. The 24-Hour Rule
• [ ] Electronic Retrieval: Can you produce a sortable electronic spreadsheet of your traceability data within 24 hours of a request?
• [ ] Digital Integration: Is your carrier`s system capable of feeding data directly into your traceability plan?

3. Critical Tracking Events (CTEs)
• [ ] Traceability Lot Codes: Ensure every pallet has a TLC assigned at the point of origin.
• [ ] Key Data Elements (KDEs): Verify that your shipping documents include the TLC, location description, and exact date of transfer.

4. Supreme Guarantee
• [ ] Verified Records: Supreme Trucking Group maintains digital logs of every shipment for the mandated two-year period, ensuring you are always audit-ready.

________________________________________

Operational Excellence

Featured Article: Beyond the Thermostat: Professional Reefers in 2026

Modern cold chain logistics requires more than just a cold truck. It requires operational discipline.

• Protect from Freeze (PFF): As we move through the winter of 2026, our specialized PFF protocols ensure that liquids and sensitive pharmaceuticals stay within a strict 33°F–40°F window.
• Airflow Science: We utilize high-spec flooring and specialized loading patterns to prevent \"hot spots,\" ensuring the center of your pallet stays as cold as the perimeter.
• The \"Clean Trailer\" Standard: Every Supreme Trucking Group trailer undergoes a multi-point sanitation check before a refrigerated LTL load is consolidated.

________________________________________

Market Insights

Featured Article: 2026 Refrigerated LTL Rate Forecast

The \"Freight Recession\" is ending, and capacity is tightening. Here is what Supreme Trucking Group is watching:

• Fuel & Reefer Surcharges: We provide transparent, weekly updates on reefer fuel costs so your landed cost never comes as a surprise.
• Capacity Alerts: Nearshoring in Mexico is driving up demand for northbound reefer space. We recommend booking 72 hours in advance for key lanes.
• Regulatory Surcharges: We explain how new 2027 EPA equipment mandates are affecting current carrier equipment choices and long-term contract rates.

________________________________________

Is your current carrier ready for 2026? Don`t wait for an audit to find out. Switch to the group that puts compliance and temperature integrity first. [Request a Quote from Supreme Trucking Group]
";
    lastUpdated = 1_724_432_000; // June 17, 2024 timestamp
  };

  // Submit Form
  public shared ({ caller }) func submitForm(
    name : Text,
    email : Text,
    phone : Text,
    pickupLocation : Text,
    deliveryLocation : Text,
    message : Text,
    permissionGranted : Bool,
  ) : async () {
    // Validate required fields
    if (name == "") { Runtime.trap("Missing name") };
    if (email == "") { Runtime.trap("Missing email") };
    if (phone == "") { Runtime.trap("Missing phone") };
    if (pickupLocation == "") { Runtime.trap("Missing pickup location") };
    if (deliveryLocation == "") { Runtime.trap("Missing delivery location") };
    if (not permissionGranted) { Runtime.trap("Permission not granted") };

    let timestamp = Time.now();

    let submission : FormSubmission = {
      name;
      email;
      phone;
      pickupLocation;
      deliveryLocation;
      message;
      permissionGranted;
      timestamp;
    };

    submissionsMap.add(timestamp, submission);
  };

  // Get All Submissions (for admin purposes)
  public query ({ caller }) func getAllSubmissions() : async [FormSubmission] {
    submissionsMap.values().toArray().sort(FormSubmission.compareByTimestamp);
  };

  var privacyPolicy : PrivacyPolicy = {
    title = "Supreme Trucking Group Privacy Policy";
    content =
      "# Supreme Trucking Group Privacy Policy

## Introduction

Supreme Trucking Group LLC (`we`, `us`, or `our`) operates the www.supremeltl.com website (the `Service`). This page informs you of our policies regarding the collection, use, and disclosure of personal information when you use our Service.

## Information We Collect

We collect information you provide when using our contact forms, including:

- **Name**
- **Email address**
- **Phone number**
- **Pickup and delivery locations**

We may also collect usage data such as your IP address and browser type for analytics purposes.

## Use of Information

We use the information collected to:

- Provide and improve our services
- Respond to inquiries and quote requests
- Send updates and communications (with your consent)

## Sharing of Information

We do not sell or rent your personal information to third parties. Information may be shared with service providers who assist in operating our website and delivering services, subject to confidentiality agreements.

## Cookies and Tracking

Our website may use cookies and similar tracking technologies to enhance user experience and analyze website traffic. You can adjust your browser settings to refuse cookies if you prefer.

## Data Security

We implement reasonable security measures to protect your information. However, no method of transmission over the Internet is 100% secure.

## Your Rights

You may request access, correction, or deletion of your personal information by contacting us at contact@supremeltl.com. We will comply with all applicable privacy laws and regulations.

## Changes to This Policy

We may update this Privacy Policy periodically to reflect changes in our practices. We encourage you to review this page regularly for the latest information.

## Contact Us

If you have any questions about this Privacy Policy or our data practices, please contact us at:

**Supreme Trucking Group LLC**
22 Van Veghten Dr, Bridgewater, NJ 08807
contact@supremeltl.com
201-838-0000
";
    lastUpdated = 1_720_982_400; // March 29, 2024 timestamp
  };

  // Get Privacy Policy
  public query ({ caller }) func getPrivacyPolicy() : async ?PrivacyPolicy {
    ?privacyPolicy;
  };

  // Get Resources Content
  public query ({ caller }) func getResourcesContent() : async ResourcesContent {
    resourcesContent;
  };
};
