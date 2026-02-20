terraform {
backend "s3"{
    bucket = "my-terraform-state-file-project1"
    key = "state_file/terraform_state.tfstate"
    region = "us-east-1"
}
}

