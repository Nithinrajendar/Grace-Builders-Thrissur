-- MySQL dump 10.13  Distrib 9.4.0, for macos14.7 (arm64)
--
-- Host: localhost    Database: lender_db
-- ------------------------------------------------------
-- Server version	9.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `los_appeal`
--

DROP TABLE IF EXISTS `los_appeal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `los_appeal` (
  `id` bigint NOT NULL,
  `offer_id` bigint NOT NULL,
  `appeal_date` date NOT NULL,
  `appeal_data` json NOT NULL,
  `remarks` text,
  `decision_date` varchar(45) DEFAULT NULL,
  `decision` text,
  `created_by` bigint NOT NULL,
  `assigned_to` bigint NOT NULL,
  `task_id` bigint NOT NULL,
  `status` tinyint NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_los_appeal_los_offer1_idx` (`offer_id`),
  KEY `fk_los_appeal_core_employee1_idx` (`created_by`),
  KEY `fk_los_appeal_core_employee2_idx` (`assigned_to`),
  KEY `fk_los_appeal_core_task1_idx` (`task_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `los_application`
--

DROP TABLE IF EXISTS `los_application`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `los_application` (
  `id` bigint NOT NULL,
  `loan_type_id` bigint NOT NULL,
  `code` varchar(32) NOT NULL,
  `type` varchar(128) DEFAULT NULL,
  `salutation` varchar(32) DEFAULT NULL,
  `name` varchar(256) NOT NULL,
  `mobile` varchar(64) DEFAULT NULL,
  `lead_source` varchar(256) DEFAULT NULL,
  `purpose_of_loan` varchar(128) DEFAULT NULL,
  `external_lead_id` varchar(256) DEFAULT NULL,
  `external_journey_type` varchar(128) DEFAULT NULL,
  `external_lead_type` varchar(128) DEFAULT NULL,
  `external_loan_id` varchar(256) DEFAULT NULL,
  `submission_mode` varchar(256) DEFAULT NULL,
  `email` varchar(256) NOT NULL,
  `contact_name` varchar(256) DEFAULT NULL,
  `loan_amount` decimal(15,2) DEFAULT NULL,
  `loan_code` varchar(256) DEFAULT NULL,
  `loan_status` varchar(256) DEFAULT NULL,
  `apply_capacity` enum('PERSON','ENTITY') DEFAULT NULL,
  `entity_type` varchar(256) DEFAULT NULL,
  `employment_type` varchar(256) DEFAULT NULL,
  `data` json DEFAULT NULL,
  `utm_tags` json DEFAULT NULL,
  `origin_platform` varchar(256) DEFAULT NULL,
  `customer_id` bigint DEFAULT NULL,
  `onboarding_id` bigint DEFAULT NULL,
  `sourcing_territory_id` bigint DEFAULT NULL,
  `servicing_territory_id` bigint DEFAULT NULL,
  `data_synced` varchar(128) DEFAULT NULL,
  `status` tinyint NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`),
  UNIQUE KEY `loan_code` (`loan_code`),
  KEY `fk_lsk_lead_lsk_customer1_idx` (`customer_id`),
  KEY `fk_los_application_core_loan_type1_idx` (`loan_type_id`),
  KEY `fk_los_application_onb_application1_idx` (`onboarding_id`),
  KEY `fk_sourcing_territory_id` (`sourcing_territory_id`),
  KEY `fk_servicing_territory_id` (`servicing_territory_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `los_application_document`
--

DROP TABLE IF EXISTS `los_application_document`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `los_application_document` (
  `id` bigint NOT NULL,
  `document_id` bigint NOT NULL,
  `application_id` bigint NOT NULL,
  `document_class_id` bigint DEFAULT NULL,
  `checklist_item_id` bigint DEFAULT NULL,
  `file_location` text,
  `provider` varchar(128) DEFAULT NULL,
  `reference_id` bigint DEFAULT NULL,
  `reference_type` varchar(256) DEFAULT NULL,
  `status` tinyint NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_los_application_document_core_document1_idx` (`document_id`),
  KEY `fk_los_application_document_los_application1_idx` (`application_id`),
  KEY `fk_los_application_document_core_checklist_item1_idx` (`checklist_item_id`),
  KEY `fk_los_application_document_core_document_class1_idx` (`document_class_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `los_application_lender_apply`
--

DROP TABLE IF EXISTS `los_application_lender_apply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `los_application_lender_apply` (
  `id` bigint NOT NULL,
  `journey_type` varchar(64) DEFAULT NULL,
  `application_id` bigint NOT NULL,
  `lender_id` bigint NOT NULL,
  `lender_scheme_id` bigint DEFAULT NULL,
  `lender_crm_id` varchar(256) DEFAULT NULL,
  `lender_los_id` varchar(256) DEFAULT NULL,
  `loan_account_no` varchar(256) DEFAULT NULL,
  `applied_user_id` bigint NOT NULL,
  `loan_type_id` bigint NOT NULL,
  `consent_id` bigint DEFAULT NULL,
  `links` json DEFAULT NULL,
  `last_note_id` bigint DEFAULT NULL,
  `last_synced_at` datetime DEFAULT NULL,
  `status` tinyint NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_los_application_lender_apply_los_application1_idx` (`application_id`),
  KEY `fk_los_application_lender_apply_core_lender1_idx` (`lender_id`),
  KEY `fk_los_application_lender_apply_core_user1_idx` (`applied_user_id`),
  KEY `fk_los_application_lender_apply_core_loan_type1_idx` (`loan_type_id`),
  KEY `fk_los_application_lender_apply_core_consent1_idx` (`consent_id`),
  KEY `fk_los_application_lender_apply_core_note` (`last_note_id`),
  KEY `fk_los_application_lender_apply_lender_scheme_idx` (`lender_scheme_id`),
  CONSTRAINT `fk_los_application_lender_apply_lender_scheme_idx` FOREIGN KEY (`lender_scheme_id`) REFERENCES `core_lender_scheme` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `los_application_loan`
--

DROP TABLE IF EXISTS `los_application_loan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `los_application_loan` (
  `id` bigint NOT NULL,
  `application_id` bigint NOT NULL,
  `loan_type_id` bigint NOT NULL,
  `sub_loan_type_id` bigint NOT NULL,
  `facility_code` varchar(256) NOT NULL,
  `loan_amount` decimal(15,2) NOT NULL,
  `tenure` int NOT NULL,
  `rate_of_interest` decimal(5,2) DEFAULT NULL,
  `process_fee_type` enum('FLAT','PERCENTAGE') DEFAULT NULL,
  `process_fee_value` decimal(15,2) DEFAULT NULL,
  `status` tinyint NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_los_application_loan_los_application1_idx` (`application_id`),
  KEY `fk_los_application_loan_core_loan_type1_idx` (`loan_type_id`),
  KEY `fk_los_application_loan_core_sub_loan_type1_idx` (`sub_loan_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `los_application_participant`
--

DROP TABLE IF EXISTS `los_application_participant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `los_application_participant` (
  `id` bigint NOT NULL,
  `application_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  `channel_id` bigint DEFAULT NULL,
  `participant_type` varchar(128) DEFAULT NULL,
  `territory_id` bigint DEFAULT NULL,
  `task_id` bigint DEFAULT NULL,
  `status` tinyint NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_los_application_participant_los_application1_idx` (`application_id`),
  KEY `fk_los_application_participant_core_user1_idx` (`user_id`),
  KEY `fk_los_application_participant_core_task1_idx` (`task_id`),
  KEY `channel_id` (`channel_id`),
  KEY `fk_application_participant_territory` (`territory_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `los_application_property`
--

DROP TABLE IF EXISTS `los_application_property`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `los_application_property` (
  `id` bigint NOT NULL,
  `application_id` bigint NOT NULL,
  `property_identified` tinyint DEFAULT NULL,
  `nature_of_property` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `property_type` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `property_sub_type` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `property_category` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `loan_purpose` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `property_ownership` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `property_status` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `property_sub_status` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `property_address` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `transaction_type` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `building_approval` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `record_issued_by` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `no_of_units` int DEFAULT NULL,
  `developer_name` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `developer_id` bigint DEFAULT NULL,
  `project_name` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `project_id` bigint DEFAULT NULL,
  `pincode_id` bigint DEFAULT NULL,
  `pincode` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `latitude` decimal(10,8) DEFAULT NULL,
  `longitude` decimal(11,8) DEFAULT NULL,
  `on_east` varchar(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `on_west` varchar(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `on_north` varchar(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `on_south` varchar(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `survey_no` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `administrative_area_code` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `administrative_area_name` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `door_no` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `floor_no` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `plot_no` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `shop_no` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `landmark` varchar(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `age_of_property` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `plot_sqft` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `built_up_sqft` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `plot_value` decimal(15,2) DEFAULT NULL,
  `property_value` decimal(15,2) DEFAULT NULL,
  `data` json DEFAULT NULL,
  `status` tinyint NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_lsk_property_lsk_lead1_idx` (`application_id`),
  KEY `fk_los_application_property_core_pincode1_idx` (`pincode_id`),
  KEY `fk_los_application_property_core_project1_idx` (`project_id`),
  KEY `fk_los_application_property_core_developer1_idx` (`developer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `los_applied_rule`
--

DROP TABLE IF EXISTS `los_applied_rule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `los_applied_rule` (
  `id` bigint NOT NULL,
  `rule_category_id` bigint NOT NULL,
  `category_type` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `rule_type` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `journey_type` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `rule_execution_id` bigint DEFAULT NULL,
  `application_id` bigint NOT NULL,
  `lender_id` bigint DEFAULT NULL,
  `task_id` bigint DEFAULT NULL,
  `lender_scheme_id` bigint DEFAULT NULL,
  `loan_type_id` bigint DEFAULT NULL,
  `onboarding_id` bigint DEFAULT NULL,
  `rule_expression` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `rule_data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `rule_status` tinyint NOT NULL,
  `assign_key` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `assign_value` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `message` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `status` tinyint NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_los_lender_applied_rule_core_rule_category1_idx` (`rule_category_id`),
  KEY `fk_los_lender_applied_rule_core_rule_execution1_idx` (`rule_execution_id`),
  KEY `fk_los_lender_applied_rule_los_application1_idx` (`application_id`),
  KEY `fk_los_lender_applied_rule_core_lender1_idx` (`lender_id`),
  KEY `fk_los_lender_applied_rule_core_task1_idx` (`task_id`),
  KEY `fk_los_applied_rule_core_lender_scheme1_idx` (`lender_scheme_id`),
  KEY `fk_los_applied_rule_core_loan_type1_idx` (`loan_type_id`),
  KEY `fk_los_applied_rule_onb_application1_idx` (`onboarding_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `los_beneficiary`
--

DROP TABLE IF EXISTS `los_beneficiary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `los_beneficiary` (
  `id` bigint NOT NULL,
  `loan_account_id` bigint NOT NULL,
  `beneficiary_type` varchar(128) COLLATE utf8mb4_general_ci NOT NULL,
  `beneficiary_name` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `account_number` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `bank_id` bigint DEFAULT NULL,
  `ifsc_code` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `swift_code` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `fund_out_date` datetime DEFAULT NULL,
  `status` tinyint NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_los_disbursement_beneficiary_core_bank1_idx` (`bank_id`),
  KEY `fk_los_disbursement_beneficiary_los_loan_account1_idx` (`loan_account_id`),
  CONSTRAINT `fk_los_disbursement_beneficiary_core_bank1` FOREIGN KEY (`bank_id`) REFERENCES `core_bank` (`id`),
  CONSTRAINT `fk_los_disbursement_beneficiary_los_loan_account1` FOREIGN KEY (`loan_account_id`) REFERENCES `los_loan_account` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `los_charge_and_fees`
--

DROP TABLE IF EXISTS `los_charge_and_fees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `los_charge_and_fees` (
  `id` bigint NOT NULL,
  `offer_id` bigint DEFAULT NULL,
  `loan_account_id` bigint DEFAULT NULL,
  `disbursement_tranche_id` bigint DEFAULT NULL,
  `category` enum('FEE','CHARGE') DEFAULT NULL,
  `apply_stage` varchar(128) DEFAULT NULL,
  `collection_method` varchar(50) DEFAULT NULL,
  `calculation_type` varchar(64) NOT NULL COMMENT 'Flat, Percentage',
  `cf_value` decimal(15,2) NOT NULL,
  `cf_type` varchar(128) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `cf_amount` decimal(15,2) DEFAULT NULL,
  `tax_name` varchar(128) DEFAULT NULL,
  `tax_value` decimal(5,2) NOT NULL,
  `tax_amount` decimal(15,2) NOT NULL,
  `terms_and_conditions` text,
  `status` tinyint NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_los_charge_and_fees_los_offer1_idx` (`offer_id`),
  KEY `fk_los_charge_and_fees_los_loan_account1` (`loan_account_id`),
  KEY `fk_los_charge_and_fees_los_disbursement_tranche1` (`disbursement_tranche_id`),
  CONSTRAINT `los_charge_and_fees_ibfk_1` FOREIGN KEY (`disbursement_tranche_id`) REFERENCES `los_disbursement_tranche` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `los_computed_offer`
--

DROP TABLE IF EXISTS `los_computed_offer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `los_computed_offer` (
  `id` bigint NOT NULL,
  `lender_id` bigint NOT NULL,
  `loan_type_id` bigint DEFAULT NULL,
  `lender_scheme_id` bigint DEFAULT NULL,
  `application_id` bigint NOT NULL,
  `workflow_step_id` bigint DEFAULT NULL,
  `journey_type` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `selection_status` tinyint DEFAULT NULL,
  `formula_type` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `formula_value` decimal(15,2) DEFAULT NULL,
  `min_tenure` int DEFAULT NULL,
  `max_tenure` int DEFAULT NULL,
  `tenure` int DEFAULT NULL,
  `interest_rate` decimal(5,2) DEFAULT NULL,
  `special_interest_rate` decimal(5,2) DEFAULT NULL,
  `rack_interest_rate` decimal(5,2) DEFAULT NULL,
  `min_loan_amount` decimal(15,2) DEFAULT NULL,
  `max_loan_amount` decimal(15,2) DEFAULT NULL,
  `offer_loan_amount` decimal(15,2) DEFAULT NULL,
  `emi_amount` decimal(15,2) DEFAULT NULL,
  `data` json DEFAULT NULL,
  `computed_by` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `offer_type` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `deviation_value` decimal(15,2) DEFAULT NULL,
  `deviation_level` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `offer_id` bigint DEFAULT NULL,
  `status` tinyint NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_mkt_offer_computed_result_core_lender1_idx` (`lender_id`),
  KEY `fk_mkt_offer_computed_result_core_lender_scheme1_idx` (`lender_scheme_id`),
  KEY `fk_mkt_offer_computed_result_los_application1_idx` (`application_id`),
  KEY `fk_mkt_offer_computed_result_core_workflow_step1_idx` (`workflow_step_id`),
  KEY `fk_mkt_offer_computed_result_core_loan_type1_idx` (`loan_type_id`),
  KEY `fk_los_computed_offer_core_user1` (`user_id`),
  KEY `fk_los_computed_offer_los_offer1` (`offer_id`),
  CONSTRAINT `los_computed_offer_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `core_user` (`id`),
  CONSTRAINT `los_computed_offer_ibfk_2` FOREIGN KEY (`offer_id`) REFERENCES `los_offer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `los_disbursement_bank_account`
--

DROP TABLE IF EXISTS `los_disbursement_bank_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `los_disbursement_bank_account` (
  `id` bigint NOT NULL,
  `mode` varchar(64) DEFAULT NULL,
  `offer_id` bigint NOT NULL,
  `bank_account_id` bigint NOT NULL,
  `amount` decimal(15,2) NOT NULL,
  `percentage` decimal(5,2) DEFAULT NULL,
  `note` text,
  `status` tinyint NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_los_disbursement_bank_account_los_offer1_idx` (`offer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `los_disbursement_tranche`
--

DROP TABLE IF EXISTS `los_disbursement_tranche`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `los_disbursement_tranche` (
  `id` bigint NOT NULL,
  `loan_account_id` bigint NOT NULL,
  `disbursement_type` enum('INITIAL','PARTIAL','FINAL') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `requested_amount` decimal(16,2) NOT NULL,
  `requested_disbursement_date` date NOT NULL,
  `actual_amount` decimal(16,2) DEFAULT NULL,
  `actual_disbursement_date` date DEFAULT NULL,
  `disbursement_status` enum('PENDING','DISBURSED','CANCELLED') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `fund_out_date` datetime DEFAULT NULL,
  `tenure` int DEFAULT NULL,
  `rate_of_interest` decimal(5,2) DEFAULT NULL,
  `remarks` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `is_final_tranche` tinyint DEFAULT NULL,
  `created_by` bigint DEFAULT NULL,
  `approved_by` bigint DEFAULT NULL,
  `status` tinyint NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_los_disbursement_tranches_los_loan_account1_idx` (`loan_account_id`),
  KEY `fk_los_disbursement_tranche_core_user1_idx` (`created_by`),
  KEY `fk_los_disbursement_tranche_core_user2_idx` (`approved_by`),
  CONSTRAINT `fk_los_disbursement_tranche_core_user1` FOREIGN KEY (`created_by`) REFERENCES `core_user` (`id`),
  CONSTRAINT `fk_los_disbursement_tranche_core_user2` FOREIGN KEY (`approved_by`) REFERENCES `core_user` (`id`),
  CONSTRAINT `fk_los_disbursement_tranches_los_loan_account1` FOREIGN KEY (`loan_account_id`) REFERENCES `los_loan_account` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `los_elimination_rule`
--

DROP TABLE IF EXISTS `los_elimination_rule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `los_elimination_rule` (
  `id` bigint NOT NULL,
  `rule_category_id` bigint NOT NULL,
  `rule_execution_id` bigint NOT NULL,
  `application_id` bigint NOT NULL,
  `workflow_step_id` bigint DEFAULT NULL,
  `applicable_to` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `rule_expression` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `rule_data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `rule_status` tinyint NOT NULL,
  `status` tinyint NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_mkt_lender_rule_result_core_rule_execution1_idx` (`rule_execution_id`),
  KEY `fk_mkt_lender_rule_result_los_application1_idx` (`application_id`),
  KEY `fk_los_lender_rule_result_core_workflow_step1_idx` (`workflow_step_id`),
  KEY `fk_los_elimination_rule_core_rule_category1_idx` (`rule_category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `los_lender_eligible_income`
--

DROP TABLE IF EXISTS `los_lender_eligible_income`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `los_lender_eligible_income` (
  `id` bigint NOT NULL,
  `application_id` bigint NOT NULL,
  `lender_id` bigint NOT NULL,
  `level` varchar(32) NOT NULL,
  `amount_type` varchar(64) NOT NULL,
  `amount` decimal(16,2) NOT NULL,
  `formula_type` varchar(64) DEFAULT NULL,
  `profile_type` varchar(32) DEFAULT NULL,
  `applicant_category` varchar(32) DEFAULT NULL,
  `applicant_id` bigint DEFAULT NULL,
  `status` tinyint NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_los_lender_eligible_income_los_application1_idx` (`application_id`),
  KEY `fk_los_lender_eligible_income_core_lender1_idx` (`lender_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `los_loan_account`
--

DROP TABLE IF EXISTS `los_loan_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `los_loan_account` (
  `id` bigint NOT NULL,
  `application_id` bigint NOT NULL,
  `lender_id` bigint DEFAULT NULL,
  `loan_account_no` varchar(64) NOT NULL,
  `loan_status` varchar(32) NOT NULL,
  `sanctioned_amount` decimal(16,2) DEFAULT NULL,
  `sanctioned_date` datetime DEFAULT NULL,
  `tenure` int DEFAULT NULL,
  `rate_of_interest` decimal(5,2) DEFAULT NULL,
  `is_final_disbursed` tinyint DEFAULT NULL,
  `total_disbursed_amount` decimal(16,2) DEFAULT NULL,
  `disbursed_status` enum('PENDING','PARTIAL','COMPLETE') DEFAULT NULL,
  `status` tinyint NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_los_loan_account_los_application1_idx` (`application_id`),
  KEY `fk_los_loan_account_core_lender1_idx` (`lender_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `los_offer`
--

DROP TABLE IF EXISTS `los_offer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `los_offer` (
  `id` bigint NOT NULL,
  `scheme_id` bigint DEFAULT NULL,
  `lender_id` bigint NOT NULL,
  `application_id` bigint NOT NULL,
  `application_loan_id` bigint NOT NULL,
  `instalment_type` varchar(64) DEFAULT NULL,
  `sanction_amount` decimal(15,2) DEFAULT NULL,
  `purpose_of_loan` varchar(512) DEFAULT NULL,
  `tenure` int DEFAULT NULL,
  `rate_of_interest` decimal(5,2) DEFAULT NULL,
  `interest_type` varchar(128) DEFAULT NULL COMMENT 'Flat - Floating -Reducing',
  `instalment_amount` decimal(15,2) DEFAULT NULL,
  `instalment_start_date` int DEFAULT NULL,
  `instalment_schedule` varchar(64) DEFAULT NULL,
  `repayment_period` int DEFAULT NULL,
  `processing_amount` decimal(15,2) DEFAULT NULL,
  `processing_percentage` decimal(5,2) DEFAULT NULL,
  `broken_period_interest` decimal(15,2) DEFAULT NULL,
  `loan_id` bigint DEFAULT NULL,
  `reject_reason` text,
  `lender_status` varchar(256) DEFAULT NULL,
  `disbursed_amount` decimal(15,2) DEFAULT NULL,
  `total_repayment_amount` decimal(15,2) DEFAULT NULL,
  `offer_date` date DEFAULT NULL,
  `offer_source` varchar(256) DEFAULT NULL,
  `previous_offer_id` bigint DEFAULT NULL,
  `reference_appeal_id` bigint DEFAULT NULL,
  `workflow_step_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `deviation_level` varchar(32) NOT NULL,
  `status` tinyint NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_lsk_offer_lsk_scheme1_idx` (`scheme_id`),
  KEY `fk_lsk_offer_lsk_lender1_idx` (`lender_id`),
  KEY `fk_lsk_offer_lsk_lead1_idx` (`application_id`),
  KEY `fk_lsk_offer_crm_loan1_idx` (`loan_id`),
  KEY `fk_los_offer_los_application_loan1_idx` (`application_loan_id`),
  KEY `fk_los_offer_los_appeal1_idx` (`reference_appeal_id`),
  KEY `fk_los_offer_los_offer1_idx` (`previous_offer_id`),
  KEY `fk_los_offer_core_workflow_step1` (`workflow_step_id`),
  KEY `fk_los_offer_core_user1_idx` (`user_id`),
  CONSTRAINT `los_offer_ibfk_1` FOREIGN KEY (`workflow_step_id`) REFERENCES `core_workflow_step` (`id`),
  CONSTRAINT `los_offer_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `core_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `los_offer_rule`
--

DROP TABLE IF EXISTS `los_offer_rule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `los_offer_rule` (
  `id` bigint NOT NULL,
  `offer_rule_id` bigint NOT NULL,
  `application_id` bigint NOT NULL,
  `rule_execution_id` bigint NOT NULL,
  `offer_rule_type` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `workflow_step_id` bigint DEFAULT NULL,
  `rule_expression` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `rule_data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `rule_status` tinyint NOT NULL,
  `assign_value` double NOT NULL,
  `status` tinyint NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_mkt_offer_rule_result_mkt_offer_rule1_idx` (`offer_rule_id`),
  KEY `fk_mkt_offer_rule_result_los_application1_idx` (`application_id`),
  KEY `fk_mkt_offer_rule_result_core_rule_execution1_idx` (`rule_execution_id`),
  KEY `fk_mkt_offer_rule_result_core_workflow_step1_idx` (`workflow_step_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `los_property_owner`
--

DROP TABLE IF EXISTS `los_property_owner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `los_property_owner` (
  `id` bigint NOT NULL,
  `application_id` bigint NOT NULL,
  `application_property_id` bigint NOT NULL,
  `person_id` bigint DEFAULT NULL,
  `entity_id` bigint DEFAULT NULL,
  `status` tinyint NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_los_property_owner_los_application_property1_idx` (`application_property_id`),
  KEY `fk_los_property_owner_los_application1_idx` (`application_id`),
  KEY `fk_los_property_owner_onb_person1_idx` (`person_id`),
  KEY `fk_los_property_owner_onb_entity1_idx` (`entity_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `los_repayment_schedule`
--

DROP TABLE IF EXISTS `los_repayment_schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `los_repayment_schedule` (
  `id` bigint NOT NULL,
  `offer_id` bigint NOT NULL,
  `interest_type` varchar(64) NOT NULL,
  `rate_of_interest` decimal(5,2) NOT NULL,
  `instalment_no` int NOT NULL,
  `outstanding_amount` decimal(15,2) DEFAULT NULL,
  `principal_amount` decimal(15,2) DEFAULT NULL,
  `interest_amount` decimal(15,2) DEFAULT NULL,
  `instalment_amount` decimal(15,2) DEFAULT NULL,
  `status` tinyint NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_los_repayment_schedule_los_offer1_idx` (`offer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `los_tranche_payout`
--

DROP TABLE IF EXISTS `los_tranche_payout`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `los_tranche_payout` (
  `id` bigint NOT NULL,
  `beneficiary_id` bigint NOT NULL,
  `tranches_id` bigint NOT NULL,
  `payout_amount` decimal(16,2) NOT NULL,
  `payout_purpose` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `status` tinyint NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_los_beneficiary_tranche_los_disbursement_beneficiary1_idx` (`beneficiary_id`),
  KEY `fk_los_beneficiary_tranche_los_disbursement_tranches1_idx` (`tranches_id`),
  CONSTRAINT `fk_los_beneficiary_tranche_los_disbursement_beneficiary1` FOREIGN KEY (`beneficiary_id`) REFERENCES `los_beneficiary` (`id`),
  CONSTRAINT `fk_los_beneficiary_tranche_los_disbursement_tranches1` FOREIGN KEY (`tranches_id`) REFERENCES `los_disbursement_tranche` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `los_underwriting_review`
--

DROP TABLE IF EXISTS `los_underwriting_review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `los_underwriting_review` (
  `id` bigint NOT NULL,
  `application_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  `hierarchy_level` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `action_type` enum('APPROVER','REVIEWER') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `remarks` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `offer_id` bigint DEFAULT NULL,
  `sequence` int DEFAULT NULL,
  `allocated_at` datetime DEFAULT NULL,
  `reviewed_at` datetime DEFAULT NULL,
  `review_status` int NOT NULL,
  `status` tinyint NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_core_underwriting_review_core_user1_idx` (`user_id`),
  KEY `fk_core_underwriting_review_los_application1_idx` (`application_id`),
  KEY `fk_los_underwriting_review_los_offer1_idx` (`offer_id`),
  CONSTRAINT `fk_core_underwriting_review_core_user1` FOREIGN KEY (`user_id`) REFERENCES `core_user` (`id`),
  CONSTRAINT `fk_core_underwriting_review_los_application1` FOREIGN KEY (`application_id`) REFERENCES `los_application` (`id`),
  CONSTRAINT `fk_los_underwriting_review_los_offer1` FOREIGN KEY (`offer_id`) REFERENCES `los_offer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `los_vehicle_details`
--

DROP TABLE IF EXISTS `los_vehicle_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `los_vehicle_details` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `application_id` bigint NOT NULL,
  `make` varchar(256) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `model` varchar(256) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `year` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `vin` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `price` decimal(65,3) DEFAULT NULL,
  `estimated_value` decimal(65,3) DEFAULT NULL,
  `data` json DEFAULT NULL,
  `status` tinyint NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_lsk_vehicle_details_lsk_lead1_idx` (`application_id`)
) ENGINE=InnoDB AUTO_INCREMENT=177044409231164586 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-02-25  9:37:20
