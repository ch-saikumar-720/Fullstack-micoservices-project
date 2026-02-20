variable "region" {
  type    = any
  default = "us-east-1"
}

variable "ami" {
  type        = any
  default     = ""
  description = "Input ami"
}

variable "instance_type" {
  type        = any
  default     = "t2.micro"
  description = "Input instance type"
}

variable "cidr_block" {
  type    = any
  default = ""
}

variable "availability_zone" {
  type    = any
  default = ""
}

variable "cidr_block_sub" {
  type    = any
  default = ""
}
